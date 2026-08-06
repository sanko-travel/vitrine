export default function ReassuranceBand() {
  const items = [
    "Immatriculée Atout France IM013260002",
    "Garantie financière 350 000\u202F€",
    "RC Pro tourisme",
    "Voyages 100% conformes",
  ];

  return (
    <div className="bg-teal/90 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white font-body text-sm text-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            {i > 0 && <span className="text-white/30">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
