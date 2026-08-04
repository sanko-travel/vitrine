import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'

function computeLabelPositions(stops) {
  // Par défaut tout le monde est au-dessus du dot
  // Si deux stops sont proches, le plus ancien (index bas) reste au-dessus, le suivant passe en dessous
  const positions = stops.map(() => 'above')
  for (let i = 0; i < stops.length; i++) {
    for (let j = i + 1; j < stops.length; j++) {
      const [lat1, lng1] = stops[i].coordinates
      const [lat2, lng2] = stops[j].coordinates
      const dist = Math.sqrt((lat2 - lat1) ** 2 + (lng2 - lng1) ** 2)
      if (dist < 0.5) {
        positions[j] = 'below'
      }
    }
  }
  return positions
}

function computeCurvedPath(stops) {
  // Courbe de Bézier quadratique entre chaque paire de stops,
  // bombée vers l'extérieur de la carte (loin du centre des stops).
  // curveInward: true sur un stop inverse la courbure du segment qui en part.
  const allPoints = []

  const cLat = stops.reduce((s, st) => s + st.coordinates[0], 0) / stops.length
  const cLng = stops.reduce((s, st) => s + st.coordinates[1], 0) / stops.length

  for (let i = 0; i < stops.length - 1; i++) {
    const [lat1, lng1] = stops[i].coordinates
    const [lat2, lng2] = stops[i + 1].coordinates

    const midLat = (lat1 + lat2) / 2
    const midLng = (lng1 + lng2) / 2

    const dx = lng2 - lng1
    const dy = lat2 - lat1
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len === 0) continue

    const perpLat = dx / len
    const perpLng = -dy / len

    const toOutLat = midLat - cLat
    const toOutLng = midLng - cLng
    const dot = perpLat * toOutLat + perpLng * toOutLng
    const autoSign = dot >= 0 ? 1 : -1
    const sign = stops[i].curveInward ? -autoSign : autoSign

    const offset = len * 0.2
    const ctrlLat = midLat + sign * perpLat * offset
    const ctrlLng = midLng + sign * perpLng * offset

    const N = 30
    for (let j = 0; j <= N; j++) {
      const t = j / N
      const omt = 1 - t
      allPoints.push([
        omt * omt * lat1 + 2 * omt * t * ctrlLat + t * t * lat2,
        omt * omt * lng1 + 2 * omt * t * ctrlLng + t * t * lng2,
      ])
    }
  }

  return allPoints
}

function computeArrowPositions(stops) {
  const arrows = []
  const cLat = stops.reduce((s, st) => s + st.coordinates[0], 0) / stops.length
  const cLng = stops.reduce((s, st) => s + st.coordinates[1], 0) / stops.length

  for (let i = 0; i < stops.length - 1; i++) {
    const [lat1, lng1] = stops[i].coordinates
    const [lat2, lng2] = stops[i + 1].coordinates
    const midLat = (lat1 + lat2) / 2
    const midLng = (lng1 + lng2) / 2
    const dx = lng2 - lng1
    const dy = lat2 - lat1
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len === 0) continue

    const perpLat = dx / len
    const perpLng = -dy / len
    const toOutLat = midLat - cLat
    const toOutLng = midLng - cLng
    const dot = perpLat * toOutLat + perpLng * toOutLng
    const autoSign = dot >= 0 ? 1 : -1
    const sign = stops[i].curveInward ? -autoSign : autoSign
    const offset = len * 0.2
    const ctrlLat = midLat + sign * perpLat * offset
    const ctrlLng = midLng + sign * perpLng * offset

    // Midpoint of Bezier at t=0.5
    const t = 0.5, omt = 0.5
    const arrowLat = omt * omt * lat1 + 2 * omt * t * ctrlLat + t * t * lat2
    const arrowLng = omt * omt * lng1 + 2 * omt * t * ctrlLng + t * t * lng2

    // Tangent (derivative of quadratic Bezier)
    const tangentLat = 2 * omt * (ctrlLat - lat1) + 2 * t * (lat2 - ctrlLat)
    const tangentLng = 2 * omt * (ctrlLng - lng1) + 2 * t * (lng2 - ctrlLng)
    const angle = Math.atan2(tangentLng, tangentLat) * (180 / Math.PI)

    arrows.push({ position: [arrowLat, arrowLng], angle })
  }
  return arrows
}

function DirectionArrows({ stops }) {
  const map = useMap()
  const arrows = useMemo(() => computeArrowPositions(stops), [stops])

  useEffect(() => {
    const markers = arrows.map(({ position, angle }) => {
      const icon = L.divIcon({
        className: '',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        html: `<svg width="24" height="24" viewBox="0 0 24 24" style="transform:rotate(${angle}deg)">
          <path d="M12 3 L20 16 L12 12.5 L4 16 Z" fill="#f8a009" stroke="#f8a009" stroke-width="0.5" opacity="0.8"/>
        </svg>`,
      })
      return L.marker(position, { icon, interactive: false }).addTo(map)
    })
    return () => markers.forEach((m) => map.removeLayer(m))
  }, [map, arrows])

  return null
}

function WaypointMarkers({ stops, activeDay, onMarkerClick }) {
  const map = useMap()

  useEffect(() => {
    const labelPositions = computeLabelPositions(stops)

    const markers = stops.map((stop, i) => {
      const isFirst = i === 0
      const isActive = activeDay !== null && stop.days.includes(activeDay)
      const isGreen = isActive || (activeDay === null && isFirst)
      const dotColor = isGreen ? '#22c55e' : '#025961'
      const haloStyle = isActive
        ? 'box-shadow:0 0 0 6px rgba(34,197,94,0.35),0 0 16px rgba(34,197,94,0.25);animation:pulseHalo 2s ease-in-out infinite;'
        : ''
      const outerSize = isActive ? 28 : 20
      const innerSize = isActive ? 18 : 12

      const labelText = `J${stop.days[0]} · ${stop.city}`
      const isAbove = labelPositions[i] === 'above'

      const labelHtml = `
        <div style="
          ${isAbove ? 'margin-bottom:4px;' : 'margin-top:4px;'}
          background:white;
          padding:2px 10px;
          border-radius:10px;
          box-shadow:0 2px 8px rgba(0,0,0,0.12);
          font-family:'Lexend',sans-serif;
          font-size:11px;
          font-weight:700;
          color:#1a1a1a;
          white-space:nowrap;
        ">${labelText}</div>
      `

      const dotHtml = `
        <div style="
          width:${outerSize}px;height:${outerSize}px;border-radius:50%;
          background:white;
          box-shadow:0 2px 8px rgba(0,0,0,0.18);
          display:flex;align-items:center;justify-content:center;
          transition:all 0.3s ease;
          ${haloStyle}
        ">
          <div style="width:${innerSize}px;height:${innerSize}px;border-radius:50%;background:${dotColor};transition:all 0.3s ease;"></div>
        </div>
      `

      const icon = L.divIcon({
        className: '',
        iconSize: [120, 70],
        iconAnchor: isAbove ? [60, 50] : [60, 20],
        html: `
          <style>@keyframes pulseHalo{0%,100%{box-shadow:0 0 0 4px rgba(34,197,94,0.35),0 0 12px rgba(34,197,94,0.2)}50%{box-shadow:0 0 0 8px rgba(34,197,94,0.2),0 0 20px rgba(34,197,94,0.3)}}</style>
          <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
            ${isAbove ? labelHtml + dotHtml : dotHtml + labelHtml}
          </div>
        `,
      })

      const marker = L.marker(stop.coordinates, { icon }).addTo(map)
      marker.on('click', () => onMarkerClick(stop.days[0]))
      return marker
    })

    return () => {
      markers.forEach((m) => map.removeLayer(m))
    }
  }, [map, stops, activeDay, onMarkerClick])

  return null
}

function FitBounds({ stops }) {
  const map = useMap()
  useEffect(() => {
    if (stops.length === 0) return
    if (stops.length === 1) {
      map.setView(stops[0].coordinates, 12)
      return
    }
    const bounds = L.latLngBounds(stops.map((s) => s.coordinates))
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 7 })
  }, [map, stops])
  return null
}

export default function VoyageMap({ route, activeDay, onMarkerClick }) {
  const uniqueStops = useMemo(() => {
    const seen = new Map()
    for (const stop of route) {
      const key = stop.coordinates.join(',')
      if (seen.has(key)) {
        const existing = seen.get(key)
        existing.days = [...new Set([...existing.days, ...stop.days])].sort((a, b) => a - b)
      } else {
        seen.set(key, { ...stop, days: [...stop.days] })
      }
    }
    return [...seen.values()]
  }, [route])

  const curvedPositions = useMemo(
    () => computeCurvedPath(route),
    [route]
  )

  const center = uniqueStops.length > 0
    ? [
        uniqueStops.reduce((s, w) => s + w.coordinates[0], 0) / uniqueStops.length,
        uniqueStops.reduce((s, w) => s + w.coordinates[1], 0) / uniqueStops.length,
      ]
    : [44, 12]

  return (
    <div className="relative rounded-xl overflow-hidden border border-teal/15">
      <MapContainer
        center={center}
        zoom={5}
        className="h-[260px] sm:h-[380px] w-full"
        zoomControl={true}
        attributionControl={false}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={true}
        touchZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <FitBounds stops={uniqueStops} />

        {/* Shadow */}
        <Polyline
          positions={curvedPositions}
          pathOptions={{
            color: 'rgba(248,160,9,0.12)',
            weight: 8,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />
        {/* Yellow solid line */}
        <Polyline
          positions={curvedPositions}
          pathOptions={{
            color: '#f8a009',
            weight: 3,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />

        <DirectionArrows stops={route} />
        <WaypointMarkers stops={uniqueStops} activeDay={activeDay} onMarkerClick={onMarkerClick} />
      </MapContainer>

    </div>
  )
}
