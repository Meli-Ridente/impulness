import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/** Cursor personalizado: anillo con inercia + punto. Solo en dispositivos con puntero fino (ratón). */
export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return undefined
    const ring = ringRef.current
    const dot = dotRef.current
    let rx = 0
    let ry = 0
    let tx = 0
    let ty = 0
    let raf

    const loop = () => {
      rx += (tx - rx) * 0.16
      ry += (ty - ry) * 0.16
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`
      dot.style.transform = `translate3d(${tx}px,${ty}px,0)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    const onMove = (ev) => {
      tx = ev.clientX
      ty = ev.clientY
      ring.style.opacity = '1'
      dot.style.opacity = '1'
      const hot = ev.target.closest?.('a,button,input,textarea,label,[data-image-slot]')
      ring.style.width = ring.style.height = hot ? '54px' : '34px'
      ring.style.margin = hot ? '-27px 0 0 -27px' : '-17px 0 0 -17px'
      ring.style.background = hot ? 'rgba(145,132,217,.12)' : 'transparent'
    }
    const onLeave = () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [reduce])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
