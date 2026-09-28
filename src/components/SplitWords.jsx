import { Fragment } from 'react'

/**
 * Trocea un texto en palabras que "suben" una a una (efecto máscara en títulos).
 * `shown` controla si ya están visibles; el retardo escalonado es de 55 ms por palabra.
 */
export default function SplitWords({ text, shown }) {
  const words = text.split(/\s+/).filter(Boolean)
  return words.map((word, i) => {
    const delay = `${i * 55}ms`
    const style = shown
      ? {
          transform: 'translateY(0) rotate(0deg)',
          filter: 'blur(0)',
          opacity: 1,
          transition: `transform .95s cubic-bezier(.16,1,.3,1) ${delay}, filter .8s ease ${delay}, opacity .8s ease ${delay}`,
        }
      : {
          transform: 'translateY(105%) rotate(4deg)',
          filter: 'blur(6px)',
          opacity: 0,
          transition: `transform .95s cubic-bezier(.16,1,.3,1) ${delay}, filter .8s ease ${delay}, opacity .8s ease ${delay}`,
        }
    return (
      <Fragment key={i}>
        <span className="sw-wrap" aria-hidden="true">
          <span className="sw-word" style={style}>
            {word}
          </span>
        </span>{' '}
      </Fragment>
    )
  })
}
