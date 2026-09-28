import { useState } from 'react'

/** true si el usuario pidió "reducir movimiento" en su sistema */
export function useReducedMotion() {
  const [reduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  return reduce
}
