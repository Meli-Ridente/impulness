import { createElement, useEffect, useRef, useState } from 'react'
import { MOTION } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SplitWords from './SplitWords'

/*
 * Fx — un único componente para todos los efectos del diseño:
 *   rv         → aparición al hacer scroll (variantes: dissolve · words · lineup · settle · unblur · expand)
 *   delay      → retardo (ms) de la aparición
 *   tilt       → inclinación 3D siguiendo el puntero + foco de luz
 *   magnet     → efecto imán en botones
 *   parallax   → factor de parallax (p. ej. .22 o -.12)
 *   cat/filter → tarjetas filtrables (portfolio)
 *
 * Uso:  <Fx as="article" rv delay={90} variant="settle" tilt className="card">…</Fx>
 */

const DIST = { Sutil: 12, Notorio: 26, 'Máximo': 46 }
const AMP = { Sutil: 3, Notorio: 7, 'Máximo': 11 }
const K = (DIST[MOTION] ?? 26) / 26
const TILT_AMP = AMP[MOTION] ?? 7
const MAX_SPLIT_WORDS = 26
const EASE = 'cubic-bezier(.16,1,.3,1)'
const SLOW = `opacity 1s ${EASE}, filter 1.05s ${EASE}, transform 1.15s ${EASE}`

function hiddenStyle(variant) {
  switch (variant) {
    case 'words': // título largo que no se trocea
      return {
        opacity: 0,
        filter: `blur(${10 * K}px)`,
        transform: 'scale(.97)',
        transition: `opacity .9s ease, filter .9s ease, transform 1s ${EASE}`,
      }
    case 'lineup':
      return {
        opacity: 0,
        transform: `translateY(${Math.round(22 * K + 6)}px)`,
        transition: `opacity .55s ease-out, transform .6s ${EASE}`,
      }
    case 'settle':
      return {
        opacity: 0,
        filter: `blur(${12 * K}px)`,
        transform: `perspective(1200px) rotateX(${7 * K}deg) scale(.93)`,
        transformOrigin: '50% 100%',
        transition: SLOW,
      }
    case 'unblur':
      return { opacity: 0, filter: `blur(${18 * K}px) saturate(.4)`, transform: 'scale(1.07)', transition: SLOW }
    case 'expand':
      return { opacity: 0, filter: `blur(${8 * K}px)`, transform: 'scale(.965)', transition: SLOW }
    default: // dissolve
      return { opacity: 0, filter: `blur(${9 * K}px)`, transform: 'scale(1.035)', transition: SLOW }
  }
}

export default function Fx({
  as = 'div',
  rv = false,
  delay = 0,
  variant = 'dissolve',
  tilt = false,
  magnet = false,
  parallax,
  cat,
  filter = 'todos',
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const spotRef = useRef(null)
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(!rv || reduce)

  /* ── ¿se puede trocear el texto en palabras? ── */
  const text = variant === 'words' && typeof children === 'string' ? children : null
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0
  const split = wordCount > 0 && wordCount <= MAX_SPLIT_WORDS

  /* ── aparición al hacer scroll ── */
  useEffect(() => {
    if (!rv || shown) return undefined
    const el = ref.current
    let timer
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        timer = setTimeout(() => setShown(true), delay)
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [rv, shown, delay])

  /* ── filtro del portfolio ── */
  const visible = cat == null || filter === 'todos' || cat.split(' ').includes(filter)
  const prevVisible = useRef(visible)
  const [fade, setFade] = useState(false)
  const [gone, setGone] = useState(false)
  const [touched, setTouched] = useState(false)
  useEffect(() => {
    if (prevVisible.current === visible) return undefined
    prevVisible.current = visible
    setTouched(true)
    if (!visible) {
      setFade(true)
      const id = setTimeout(() => setGone(true), 380)
      return () => clearTimeout(id)
    }
    setGone(false)
    const raf = requestAnimationFrame(() => setFade(false))
    return () => cancelAnimationFrame(raf)
  }, [visible])

  /* ── parallax ── */
  useEffect(() => {
    if (parallax == null || reduce) return undefined
    const el = ref.current
    let queued = false
    const update = () => {
      queued = false
      const r = el.getBoundingClientRect()
      const mid = r.top + r.height / 2 - window.innerHeight / 2
      el.style.transform = `translate3d(0,${(mid * parallax).toFixed(1)}px,0)`
    }
    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [parallax, reduce])

  /* ── inclinación 3D + imán + foco de luz ── */
  const spot = tilt || cat != null
  useEffect(() => {
    if (reduce) return undefined
    const el = ref.current
    const sp = spotRef.current
    const off = []
    const on = (type, fn) => {
      el.addEventListener(type, fn)
      off.push(() => el.removeEventListener(type, fn))
    }
    if (tilt) {
      on('pointermove', (ev) => {
        const r = el.getBoundingClientRect()
        const rx = ((ev.clientY - r.top) / r.height - 0.5) * -TILT_AMP
        const ry = ((ev.clientX - r.left) / r.width - 0.5) * TILT_AMP
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`
      })
      on('pointerleave', () => {
        el.style.transform = ''
      })
    }
    if (magnet) {
      on('pointermove', (ev) => {
        const r = el.getBoundingClientRect()
        const dx = (ev.clientX - r.left - r.width / 2) * 0.12
        const dy = (ev.clientY - r.top - r.height / 2) * 0.18
        el.style.transform = `translate(${dx}px,${dy}px)`
      })
      on('pointerleave', () => {
        el.style.transform = ''
      })
    }
    if (spot && sp) {
      on('pointerenter', () => {
        sp.style.opacity = '1'
      })
      on('pointerleave', () => {
        sp.style.opacity = '0'
      })
      on('pointermove', (ev) => {
        const r = el.getBoundingClientRect()
        sp.style.background = `radial-gradient(240px circle at ${ev.clientX - r.left}px ${ev.clientY - r.top}px, rgba(145,132,217,.16), transparent 70%)`
      })
    }
    return () => off.forEach((fn) => fn())
  }, [tilt, magnet, spot, reduce])

  /* ── estilos dinámicos (lo estático vive en el CSS de cada sección) ── */
  let dynamic
  if (rv && !split) {
    dynamic = shown
      ? { transition: hiddenStyle(variant).transition, willChange: 'auto' }
      : { ...hiddenStyle(variant), willChange: 'opacity, transform, filter' }
  }
  if (cat != null) {
    if (gone) dynamic = { ...dynamic, display: 'none' }
    else if (fade) dynamic = { ...dynamic, opacity: 0, transform: 'scale(.97)', transition: 'opacity .4s ease, transform .4s ease' }
    else if (touched) dynamic = { ...dynamic, transition: 'opacity .4s ease, transform .4s ease' }
  }
  const mergedStyle = dynamic || style ? { ...style, ...dynamic } : undefined

  const extra = split ? { 'aria-label': text } : null
  const content = split ? <SplitWords text={text} shown={shown} /> : children

  return createElement(
    as,
    { ref, className: className || undefined, style: mergedStyle, ...extra, ...rest },
    content,
    spot ? <div key="fx-spot" ref={spotRef} className="fx-spot" aria-hidden="true" /> : null,
  )
}
