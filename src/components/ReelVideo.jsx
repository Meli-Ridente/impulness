import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'

/**
 * Vídeo vertical en bucle que se reproduce solo (sin sonido). Se pausa mientras
 * no está en pantalla y se reanuda al volver. Un clic activa o quita el sonido.
 */
export default function ReelVideo({ src, label, soft }) {
  const ref = useRef(null)
  const [muted, setMuted] = useState(true)
  const { t } = useLang()

  useEffect(() => {
    const video = ref.current
    // React no pone el atributo muted en el DOM: sin él, algunos navegadores bloquean el autoplay
    video.muted = true
    video.defaultMuted = true
    video.play().catch(() => {})
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  const toggleSound = () => {
    const video = ref.current
    video.muted = !video.muted
    setMuted(video.muted)
    if (video.paused) video.play().catch(() => {})
  }

  return (
    <>
      <video ref={ref} className={`reel-video${soft ? " reel-video--soft" : ""}`} src={src} autoPlay muted loop playsInline preload="auto" aria-label={label} onClick={toggleSound} />
      <button type="button" className="reel-sound" onClick={toggleSound} aria-label={muted ? t("Activar sonido", "Unmute") : t("Silenciar", "Mute")}>
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  )
}
