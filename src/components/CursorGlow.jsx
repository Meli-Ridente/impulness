import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/** Halo de luz que sigue al puntero por toda la web (estilos en brand.css: .cursor-glow). */
export default function CursorGlow() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return undefined
    const el = ref.current
    let x = 0
    let y = 0
    let queued = false
    const paint = () => {
      queued = false
      el.style.transform = `translate3d(${x}px,${y}px,0)`
    }
    const onMove = (ev) => {
      x = ev.clientX
      y = ev.clientY
      el.style.opacity = '1'
      if (!queued) {
        queued = true
        requestAnimationFrame(paint)
      }
    }
    const onLeave = () => { el.style.opacity = '0' }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [reduce])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
