import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/** Halo de luz que sigue al puntero dentro de su contenedor (el hero). Posiciona con transform. */
export default function GlowFollower({ className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return undefined
    const el = ref.current
    const host = el.parentElement
    const onMove = (ev) => {
      const box = host.getBoundingClientRect()
      if (ev.clientY < box.bottom + 200) {
        el.style.transform = `translate3d(${ev.clientX - box.left - 260}px,${ev.clientY - box.top - 260}px,0)`
      }
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce])

  return <div ref={ref} className={className} aria-hidden="true" />
}
