import { useEffect, useRef, useState } from 'react'

const format = (v, dec) => v.toFixed(dec).replace('.', ',')

/** Número que cuenta desde 0 hasta `to` cuando entra en pantalla. */
export default function Counter({ to, dec = 0 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    let raf
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        const duration = 1500
        const t0 = performance.now()
        const step = (t) => {
          const p = Math.min(1, (t - t0) / duration)
          setValue(to * (1 - Math.pow(1 - p, 3)))
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return <span ref={ref}>{format(value, dec)}</span>
}
