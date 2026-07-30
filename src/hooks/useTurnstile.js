import { useEffect, useRef, useState } from 'react'

const SITE_KEY = '0x4AAAAAAEB9384p5Vu3VKRL'

export default function useTurnstile() {
  const containerRef = useRef(null)
  const widgetId = useRef(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.turnstile && containerRef.current && widgetId.current === null) {
        clearInterval(interval)
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          callback: setToken,
          'expired-callback': () => setToken(null),
          'error-callback': () => setToken(null),
        })
      }
    }, 100)
    return () => {
      clearInterval(interval)
      if (widgetId.current !== null) {
        window.turnstile?.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, [])

  const reset = () => {
    setToken(null)
    if (widgetId.current !== null) {
      window.turnstile?.reset(widgetId.current)
    }
  }

  return { containerRef, token, reset }
}
