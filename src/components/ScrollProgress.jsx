import { useEffect, useRef } from 'react'

/** Barra fina de progreso de lectura en la parte superior. */
export default function ScrollProgress({ className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      el.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div ref={ref} className={className} aria-hidden="true" />
}
