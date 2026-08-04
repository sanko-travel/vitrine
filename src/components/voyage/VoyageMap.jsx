import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'

function WaypointMarkers({ stops, activeDay, onMarkerClick }) {
  const map = useMap()

  useEffect(() => {
    const markers = stops.map((stop, i) => {
      const isFirst = i === 0
      const isLast = i === stops.length - 1
      const isActive = activeDay !== null && stop.days.includes(activeDay)
      const dotColor = isActive ? '#ea573d' : isLast ? '#ea573d' : isFirst ? '#025961' : '#025961'
      const haloStyle = isActive
        ? 'box-shadow:0 0 0 6px rgba(234,87,61,0.3),0 0 16px rgba(234,87,61,0.25);animation:pulseHalo 2s ease-in-out infinite;'
        : ''

      const icon = L.divIcon({
        className: '',
        iconSize: [80, 60],
        iconAnchor: [40, 35],
        html: `
          <style>@keyframes pulseHalo{0%,100%{box-shadow:0 0 0 4px rgba(234,87,61,0.3),0 0 12px rgba(234,87,61,0.2)}50%{box-shadow:0 0 0 8px rgba(234,87,61,0.15),0 0 20px rgba(234,87,61,0.3)}}</style>
          <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
            <div style="
              width:20px;height:20px;border-radius:50%;
              background:white;
              box-shadow:0 2px 8px rgba(0,0,0,0.18);
              display:flex;align-items:center;justify-content:center;
              ${haloStyle}
            ">
              <div style="width:12px;height:12px;border-radius:50%;background:${dotColor};"></div>
            </div>
            <div style="
              margin-top:4px;
              background:white;
              padding:2px 10px;
              border-radius:10px;
              box-shadow:0 2px 8px rgba(0,0,0,0.12);
              font-family:'Lexend',sans-serif;
              font-size:11px;
              font-weight:700;
              color:#1a1a1a;
              white-space:nowrap;
            ">${stop.city}</div>
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

  const polylinePositions = route.map((stop) => stop.coordinates)

  const center = uniqueStops.length > 0
    ? [
        uniqueStops.reduce((s, w) => s + w.coordinates[0], 0) / uniqueStops.length,
        uniqueStops.reduce((s, w) => s + w.coordinates[1], 0) / uniqueStops.length,
      ]
    : [44, 12]

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="h-[260px] sm:h-[380px] w-full"
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={false}
        touchZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <FitBounds stops={uniqueStops} />

        {/* Shadow line */}
        <Polyline
          positions={polylinePositions}
          pathOptions={{
            color: 'rgba(2,89,97,0.08)',
            weight: 8,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />
        {/* Visible dashed line */}
        <Polyline
          positions={polylinePositions}
          pathOptions={{
            color: '#025961',
            weight: 3,
            lineCap: 'round',
            lineJoin: 'round',
            dashArray: '8 6',
          }}
        />

        <WaypointMarkers stops={uniqueStops} activeDay={activeDay} onMarkerClick={onMarkerClick} />
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-xs text-gray-500 font-body">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-teal" />
          Départ
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-teal" />
          Escale
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-coral" />
          Arrivée
        </span>
      </div>
    </div>
  )
}
