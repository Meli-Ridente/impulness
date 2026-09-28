import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'

/** Palabra que rota cada 2,6 s con un fundido. `es` y `en` son arrays de palabras. */
export default function RotatingWord({ es, en, className }) {
  const { lang } = useLang()
  const [index, setIndex] = useState(0)
  const [out, setOut] = useState(false)
  const swap = useRef()

  useEffect(() => {
    const id = setInterval(() => {
      setOut(true)
      swap.current = setTimeout(() => {
        setIndex((n) => n + 1)
        setOut(false)
      }, 340)
    }, 2600)
    return () => {
      clearInterval(id)
      clearTimeout(swap.current)
    }
  }, [])

  const words = lang === 'en' && en?.length ? en : es

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        transition: 'opacity .32s ease, transform .32s ease',
        opacity: out ? 0 : 1,
        transform: out ? 'translateY(-6px)' : 'none',
      }}
    >
      {words[index % words.length]}
    </span>
  )
}
