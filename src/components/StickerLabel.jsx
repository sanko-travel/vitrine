const colors = {
  teal:  { bg: '#025961', text: '#ffffff' },
  coral: { bg: '#ea573d', text: '#ffffff' },
  yellow: { bg: '#f8a009', text: '#025961' },
}

// Rotation par défaut basée sur la longueur du texte (quand pas de style.transform fourni)
const defaultRotations = ['-2deg', '1deg', '2deg', '-1deg', '3deg']

// size: 'xs', 'sm' (default), 'md', 'lg', 'xl', '2xl' — ou un nombre en px
const sizes = {
  xs:  { fontSize: '0.75rem',  padding: '4px 12px' },
  sm:  { fontSize: '0.875rem', padding: '6px 16px' },
  md:  { fontSize: '1rem',     padding: '8px 20px' },
  lg:  { fontSize: '1.125rem', padding: '10px 24px' },
  xl:  { fontSize: '1.375rem', padding: '12px 28px' },
  '2xl': { fontSize: '1.625rem', padding: '14px 32px' },
}

export default function StickerLabel({ text, color = 'teal', size = 'sm', className = '', style = {} }) {
  const c = colors[color] || colors.teal
  // size peut être un preset ('sm','lg',...) ou un nombre en px pour fontSize
  const s = typeof size === 'number'
    ? { fontSize: `${size}px`, padding: `${Math.round(size * 0.55)}px ${Math.round(size * 1.4)}px` }
    : (sizes[size] || sizes.sm)
  const defaultRotate = defaultRotations[text.length % defaultRotations.length]

  return (
    <span
      className={`inline-block font-accent font-semibold rounded-full ${className}`}
      style={{
        backgroundColor: c.bg,
        color: c.text,
        fontSize: s.fontSize,
        padding: s.padding,
        transform: `rotate(${defaultRotate})`,
        ...style,
      }}
    >
      {text}
    </span>
  )
}
