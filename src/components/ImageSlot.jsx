import { imageSlots } from '../data/imageSlots'

/**
 * Hueco de imagen que rellena su contenedor (que debe tener position:relative y aspect-ratio).
 * Si hay imagen en data/imageSlots.js la muestra; si no, enseña un recuadro discontinuo con el texto orientativo.
 */
export default function ImageSlot({ id, placeholder }) {
  const src = imageSlots[id]

  if (src) {
    return <img className="image-slot-img" src={src} alt={placeholder} loading="lazy" decoding="async" />
  }

  return (
    <div className="image-slot" data-image-slot="">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span>{placeholder}</span>
    </div>
  )
}
