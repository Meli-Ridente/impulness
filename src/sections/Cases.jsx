import { useCallback, useEffect, useRef, useState } from 'react'
import Fx from '../components/Fx'
import ImageSlot from '../components/ImageSlot'
import silk from '../assets/silk.webp'
import { useLang } from '../i18n/LangContext'
import './Cases.css'

// cat → filtros: web · ads · redes
const CASES = [
  {
    id: 'caso-sparks',
    name: 'Sparks Insumos',
    sector: ['Cosmética al por mayor', 'Wholesale cosmetics'],
    services: ['Meta Ads', ['Redes', 'Social'], 'Web'],
    cat: 'web ads redes',
    links: [
      { type: 'instagram', url: 'https://www.instagram.com/sparks.mayorista/' },
      { type: 'web', url: '' }, // web aún no lista
    ],
  },
  {
    id: 'caso-cbvem',
    name: 'Beach Voley El Masnou',
    sector: ['Vóley playa', 'Beach volleyball'],
    services: [['Redes', 'Social'], ['Fotografía', 'Photography'], 'Web'],
    cat: 'web redes',
    links: [
      { type: 'web', url: 'https://bvelmasnou.com/' },
      { type: 'instagram', url: 'https://www.instagram.com/beachvolleyelmasnou/' },
    ],
  },
  {
    id: 'caso-cymes',
    name: 'Grupo Cymes',
    sector: ['Constructora · Madrid', 'Construction · Madrid'],
    services: ['Web', ['Diseño', 'Design']],
    cat: 'web',
    links: [{ type: 'web', url: 'https://www.grupocymes.com/' }],
  },
  {
    id: 'caso-casacelia',
    name: 'Casa Celia',
    sector: ['Brunch sin gluten', 'Gluten-free brunch'],
    services: [['Redes', 'Social'], 'Meta Ads', ['Contenido', 'Content']],
    cat: 'ads redes',
    links: [{ type: 'instagram', url: 'https://www.instagram.com/casa.celia.gluten.free/' }],
  },
  {
    id: 'caso-adscoches',
    name: 'ADS Coches',
    sector: ['Venta de coches', 'Car dealership'],
    services: ['Meta Ads', ['Redes', 'Social']],
    cat: 'ads redes',
    links: [
      { type: 'web', url: 'https://ads-inversiones.es/es' },
      { type: 'instagram', url: 'https://www.instagram.com/somos__ads' },
    ],
  },
  {
    id: 'caso-truestudio',
    name: 'Truestudio',
    sector: null,
    services: [['Redes', 'Social'], 'Meta Ads'],
    cat: 'ads redes',
    links: [{ type: 'instagram', url: 'https://www.instagram.com/truestudio.es/' }],
  },
  {
    id: 'caso-dpana',
    name: "D'pana",
    sector: null,
    services: [],
    cat: '',
    links: [
      { type: 'instagram', url: 'https://www.instagram.com/dpana_bcn/' },
      { type: 'web', url: '' }, // web aún no lista
    ],
  },
]

export default function Cases() {
  const { t } = useLang()
  const [filter, setFilter] = useState('todos')

  /* ── carrusel: flechas, barra de progreso y arrastre con ratón ── */
  const trackRef = useRef(null)
  const drag = useRef(null)
  const [nav, setNav] = useState({ prev: false, next: true, progress: 0, ratio: 1 })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setNav({
      prev: el.scrollLeft > 4,
      next: el.scrollLeft < max - 4,
      progress: max > 0 ? el.scrollLeft / max : 0,
      ratio: el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
    })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  // al filtrar, volver al principio y recalcular cuando las tarjetas ocultas desaparecen
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
    const id = setTimeout(update, 450)
    return () => clearTimeout(id)
  }, [filter, update])

  const step = (dir) => {
    const el = trackRef.current
    const card = [...el.children].find((c) => c.offsetWidth > 0)
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: dir * ((card?.offsetWidth || el.clientWidth) + gap), behavior: 'smooth' })
  }

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, moved: false }
  }
  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true
      trackRef.current.classList.add('is-dragging')
    }
    if (d.moved) trackRef.current.scrollLeft = d.left - dx
  }
  const endDrag = () => {
    if (!drag.current) return
    trackRef.current.classList.remove('is-dragging')
    // deja que el clic posterior sepa si hubo arrastre
    setTimeout(() => { drag.current = null }, 0)
  }
  const onClickCapture = (e) => {
    if (drag.current?.moved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const visitLabel = t("Ver web", "Visit site")
  const instagramLabel = t("Ver Instagram", "View Instagram")
  const tr = (v) => (Array.isArray(v) ? t(v[0], v[1]) : v)

  return (
    <section className="cases-1 bg-blobs" id="casos">
      <div className="cases-bg" aria-hidden="true">
        <Fx as="div" parallax={.12} className="hero-2">
          <div className="hero-3">
            <img className="hero-4" src={silk} alt="" loading="lazy" decoding="async" />
            <img className="hero-5" src={silk} alt="" loading="lazy" decoding="async" />
          </div>
        </Fx>
        <div className="hero-7"></div>
        <div className="hero-8"></div>
      </div>
      <div className="cases-2">
        <Fx as="div" rv className="cases-3">
          <div className="tag tag-outline cases-4">{t("Casos de éxito", "Case studies")}</div>
          <h2 className="cases-5">{t("Resultados reales,", "Real results,")} <span className="hl hl-plum">{t("no promesas.", "not promises.")}</span></h2>
          <p className="cases-6">
            {t("Una selección de marcas con las que trabajamos en web, redes sociales y Meta Ads.", "A selection of brands we work with across web, social media and Meta Ads.")}
          </p>
        </Fx>
        <Fx as="div" rv delay={90} className="cases-bar">
          <div className="cases-7">
            <button className="cases-8" type="button" aria-pressed={filter === "todos"} onClick={() => setFilter("todos")}>{t("Todos", "All")}</button>
            <button className="cases-8" type="button" aria-pressed={filter === "web"} onClick={() => setFilter("web")}>
              {t("Páginas web", "Web")}
            </button>
            <button className="cases-8" type="button" aria-pressed={filter === "ads"} onClick={() => setFilter("ads")}>Meta Ads</button>
            <button className="cases-8" type="button" aria-pressed={filter === "redes"} onClick={() => setFilter("redes")}>
              {t("Redes sociales", "Social media")}
            </button>
          </div>
          <div className="cases-arrows">
            <button className="cases-arrow" type="button" onClick={() => step(-1)} disabled={!nav.prev} aria-label={t("Anterior", "Previous")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="cases-arrow" type="button" onClick={() => step(1)} disabled={!nav.next} aria-label={t("Siguiente", "Next")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </Fx>
        <Fx as="div" rv variant="unblur">
          <div
            ref={trackRef}
            className={`cases-9${nav.prev ? " is-start-off" : ""}${nav.next ? "" : " is-end"}`}
            role="region"
            aria-label={t("Casos de éxito", "Case studies")}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
            onDragStart={(e) => e.preventDefault()}
          >
            {CASES.map((c) => (
              <Fx key={c.id} as="article" cat={c.cat} filter={filter} className="fx-host cases-10">
                <div className="cases-11">
                  <ImageSlot id={c.id} placeholder={`${t("Captura de", "Screenshot of")} ${c.name}`} />
                  <div className="cases-12">
                    {c.services.map((s, j) => (
                      <span key={j} className={`tag ${j === 0 ? "tag-accent" : "tag-neutral"} cases-13`}>{tr(s)}</span>
                    ))}
                  </div>
                </div>
                <div className="cases-14">
                  {c.sector && <div className="cases-15">{tr(c.sector)}</div>}
                  <h3 className="cases-16">{c.name}</h3>
                  {c.links?.length > 0 && (
                    <div className={`cases-links${c.links.length > 1 ? " is-multi" : ""}`}>
                      {c.links.map((l) => {
                        const label = l.type === "instagram" ? instagramLabel : visitLabel
                        return l.url ? (
                          <a key={l.type} className="cases-link" href={l.url} target="_blank" rel="noopener">
                            {label} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          <a key={l.type} className="cases-link is-empty" aria-disabled="true">
                            {label} <span aria-hidden="true">↗</span>
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              </Fx>
            ))}
          </div>
        </Fx>
        <div className="cases-progress" aria-hidden="true">
          <span style={{ width: `${nav.ratio * 100}%`, left: `${nav.progress * (1 - nav.ratio) * 100}%` }} />
        </div>
        <div className="cases-18">
          <div className="cases-19">
            {[0, 1].map((k) => (
              <div key={k} className="cases-20" aria-hidden={k === 1 || undefined}>
                {CASES.map((c) => <span key={c.id}>{c.name}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
