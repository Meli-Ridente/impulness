import { useEffect, useState } from 'react'

/** Contenedor fijo del menú: cambia a fondo translúcido al hacer scroll (ver .is-scrolled en Nav.css). */
export default function NavBar({ className = '', children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div data-nav="" className={`${className}${scrolled ? ' is-scrolled' : ''}`}>
      {children}
    </div>
  )
}
