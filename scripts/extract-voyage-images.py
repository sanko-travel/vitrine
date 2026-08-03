#!/usr/bin/env python3
"""
Extract and audit images from voyage PPT files.

Usage:
    python scripts/extract-voyage-images.py                    # Audit all PPTs
    python scripts/extract-voyage-images.py --extract loups    # Extract images for a specific voyage
    python scripts/extract-voyage-images.py --convert          # Convert PNG→JPEG for mismatched files
    python scripts/extract-voyage-images.py --duplicates       # Show cross-PPT duplicate images

Requires: Pillow (pip install Pillow)
"""

import argparse
import hashlib
import io
import os
import sys
import zipfile
from collections import defaultdict
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow is required. Install with: pip install Pillow")
    sys.exit(1)


# PPT files mapped to voyage slugs
PPT_MAP = {
    "croatie": "Immersion en Dalmatie avec @tinadventures.pptx",
    "ecosse": "Programme Edimbourg @Aurorebay.pptx",
    "egypte": "Les secrets les mieux gardés d'Egypte @jojo_wanderlust_.pptx",
    "grece": "La Grêce idyllique avec @Deavy.b.pptx",
    "japon": "Le Japon avec @nolwenn_creme.pptx",
    "loups": "Sur la trace des Loups avec @Guslegus(1).pptx",
    "nepal": "Immersion népalaise avec @Juliettecolletoff.pptx",
}

VENTE_DIR = Path("ressources/Vente")
OUTPUT_DIR = Path("public/images/voyages")

# Minimum file size to consider as a real photo (skip icons/UI elements)
MIN_PHOTO_SIZE = 50_000  # 50 KB


def get_media_files(ppt_path):
    """Extract media file info from a PPT."""
    media = []
    with zipfile.ZipFile(ppt_path, "r") as z:
        for name in z.namelist():
            if not name.startswith("ppt/media/"):
                continue
            info = z.getinfo(name)
            ext = Path(name).suffix.lower()
            if ext in (".svg", ".emf", ".wmf"):
                continue
            data = z.read(name)
            md5 = hashlib.md5(data).hexdigest()
            try:
                img = Image.open(io.BytesIO(data))
                width, height = img.size
                mode = img.mode
                actual_format = img.format
            except Exception:
                width = height = 0
                mode = "?"
                actual_format = "?"
            media.append({
                "name": name,
                "size": info.file_size,
                "ext": ext,
                "md5": md5,
                "width": width,
                "height": height,
                "mode": mode,
                "format": actual_format,
            })
    return media


def audit_all():
    """Audit all PPTs and print a summary of unique images per voyage."""
    all_hashes = defaultdict(list)  # md5 -> [(voyage, filename)]

    for voyage, ppt_name in sorted(PPT_MAP.items()):
        ppt_path = VENTE_DIR / ppt_name
        if not ppt_path.exists():
            print(f"  MISSING: {ppt_path}")
            continue

        media = get_media_files(ppt_path)
        photos = [m for m in media if m["size"] >= MIN_PHOTO_SIZE]

        print(f"\n{'=' * 60}")
        print(f"  {voyage.upper()} - {ppt_name}")
        print(f"  {len(media)} media files, {len(photos)} photos (>50KB)")
        print(f"{'=' * 60}")

        for m in sorted(photos, key=lambda x: -x["size"]):
            format_mismatch = ""
            if m["ext"] in (".jpg", ".jpeg") and m["format"] == "PNG":
                format_mismatch = " *** PNG disguised as .jpg ***"
            elif m["ext"] == ".png" and m["format"] == "JPEG":
                format_mismatch = " *** JPEG disguised as .png ***"

            print(
                f"  {m['name']:40s}  {m['width']:>5d}x{m['height']:<5d}  "
                f"{m['size']:>10,d} B  {m['mode']:>4s}  {m['format']:<4s}"
                f"  {m['md5'][:8]}{format_mismatch}"
            )
            all_hashes[m["md5"]].append((voyage, m["name"]))

    # Cross-PPT duplicates (template images)
    print(f"\n\n{'=' * 60}")
    print("  CROSS-PPT DUPLICATES (shared template images)")
    print(f"{'=' * 60}")
    duplicates = {k: v for k, v in all_hashes.items() if len(set(voy for voy, _ in v)) >= 2}
    if not duplicates:
        print("  None found.")
    for md5, locations in sorted(duplicates.items(), key=lambda x: -len(x[1])):
        voyages = sorted(set(voy for voy, _ in locations))
        print(f"\n  MD5 {md5[:8]}... shared across {len(voyages)} voyages: {', '.join(voyages)}")
        for voy, fname in sorted(locations):
            print(f"    - {voy}: {fname}")


def show_duplicates():
    """Show images that appear in 3+ PPTs (likely templates)."""
    all_hashes = defaultdict(list)

    for voyage, ppt_name in sorted(PPT_MAP.items()):
        ppt_path = VENTE_DIR / ppt_name
        if not ppt_path.exists():
            continue
        media = get_media_files(ppt_path)
        for m in media:
            all_hashes[m["md5"]].append((voyage, m["name"], m["size"]))

    print("Images found in 3+ PPTs (template/shared assets):\n")
    for md5, locations in sorted(all_hashes.items(), key=lambda x: -len(x[1])):
        unique_voyages = set(voy for voy, _, _ in locations)
        if len(unique_voyages) < 3:
            continue
        size = locations[0][2]
        print(f"  MD5 {md5[:8]}  ({size:,d} B)  in {len(unique_voyages)} PPTs:")
        for voy, fname, _ in sorted(locations):
            print(f"    {voy}: {fname}")
        print()


def extract_voyage(voyage_slug):
    """Extract all photo-sized images from a voyage PPT to a temp directory."""
    if voyage_slug not in PPT_MAP:
        print(f"Unknown voyage: {voyage_slug}")
        print(f"Available: {', '.join(sorted(PPT_MAP.keys()))}")
        sys.exit(1)

    ppt_path = VENTE_DIR / PPT_MAP[voyage_slug]
    if not ppt_path.exists():
        print(f"PPT not found: {ppt_path}")
        sys.exit(1)

    out_dir = Path(f"/tmp/voyage-extract-{voyage_slug}")
    out_dir.mkdir(parents=True, exist_ok=True)

    media = get_media_files(ppt_path)
    photos = [m for m in media if m["size"] >= MIN_PHOTO_SIZE]

    print(f"Extracting {len(photos)} photos from {ppt_path.name} to {out_dir}/\n")

    with zipfile.ZipFile(ppt_path, "r") as z:
        for m in sorted(photos, key=lambda x: x["name"]):
            data = z.read(m["name"])
            out_name = Path(m["name"]).name
            out_path = out_dir / out_name
            with open(out_path, "wb") as f:
                f.write(data)
            print(f"  {out_name:30s}  {m['width']}x{m['height']}  {m['size']:>10,d} B  {m['format']}")

    print(f"\nDone. Open {out_dir}/ to review images.")


def convert_mismatched():
    """Find and fix PNG files disguised as .jpg in public/images/voyages/."""
    fixed = 0
    for voyage_dir in sorted(OUTPUT_DIR.iterdir()):
        if not voyage_dir.is_dir():
            continue
        for img_path in sorted(voyage_dir.glob("*.jpg")):
            try:
                img = Image.open(img_path)
            except Exception:
                continue
            if img.format == "PNG":
                print(f"  FIX: {img_path} is PNG disguised as .jpg")
                if img.mode != "RGB":
                    img = img.convert("RGB")
                img.save(img_path, "JPEG", quality=90)
                new_size = img_path.stat().st_size
                print(f"       Converted to JPEG ({new_size:,d} B)")
                fixed += 1

    if fixed == 0:
        print("  No format mismatches found.")
    else:
        print(f"\n  Fixed {fixed} file(s).")


def main():
    parser = argparse.ArgumentParser(description="Extract and audit voyage PPT images")
    parser.add_argument("--extract", metavar="VOYAGE", help="Extract images for a specific voyage")
    parser.add_argument("--convert", action="store_true", help="Convert PNG→JPEG mismatches in public/")
    parser.add_argument("--duplicates", action="store_true", help="Show cross-PPT duplicate images")
    args = parser.parse_args()

    if args.extract:
        extract_voyage(args.extract)
    elif args.convert:
        convert_mismatched()
    elif args.duplicates:
        show_duplicates()
    else:
        audit_all()


if __name__ == "__main__":
    main()
