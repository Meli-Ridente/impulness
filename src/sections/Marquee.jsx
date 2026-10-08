import { useLang } from '../i18n/LangContext'
import './Marquee.css'

const ITEMS = [
  ['Desarrollo web', 'Web development'],
  ['Meta Ads', 'Meta Ads'],
  ['Redes sociales', 'Social media'],
  ['Fotografía', 'Photography'],
  ['Diseño', 'Design'],
  ['E-commerce', 'E-commerce'],
]

// La lista se repite dentro de cada mitad para que la cinta cubra pantallas muy anchas
// sin dejar huecos; la animación desplaza exactamente media pista (dos mitades idénticas).
const REPEAT = 3

export default function Marquee() {
  const { t } = useLang()

  return (
    <div className="marquee-wrap">
      <div className="marquee-1">
        <div className="marquee-2">
          {[0, 1].map((half) => (
            <div key={half} className="marquee-3" aria-hidden={half === 1 || undefined}>
              {Array.from({ length: REPEAT }).flatMap((_, r) =>
                ITEMS.map(([es, en], i) => (
                  <span key={`${r}-${i}`} className="marquee-item">
                    <span>{t(es, en)}</span>
                    <span className="marquee-4">•</span>
                  </span>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
