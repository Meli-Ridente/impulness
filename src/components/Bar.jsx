import { useEffect, useRef, useState } from 'react'

/** Barra de progreso que se llena hasta `to`% al entrar en pantalla. El resto del estilo va por className. */
export default function Bar({ to, className }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    let timer
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        timer = setTimeout(() => setWidth(to), 220)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [to])

  return <div ref={ref} className={className} style={{ width: `${width}%` }} />
}
