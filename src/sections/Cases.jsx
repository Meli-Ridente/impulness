import { useState } from 'react'
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

  const visitLabel = t("Ver web", "Visit site")
  const instagramLabel = t("Ver Instagram", "View Instagram")
  const tr = (v) => (Array.isArray(v) ? t(v[0], v[1]) : v)

  return (
    <section className="cases-1" id="casos">
      {/* mismo fondo que el hero: seda animada + grano + halos */}
      <div className="cases-bg" aria-hidden="true">
        <Fx as="div" parallax={.12} className="hero-2">
          <div className="hero-3">
            <img className="hero-4" src={silk} alt="" loading="lazy" decoding="async" />
            <img className="hero-5" src={silk} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="hero-6"></div>
        </Fx>
        <div className="hero-7"></div>
        <div className="hero-8"></div>
      </div>
      <div className="cases-2">
        <Fx as="div" rv className="cases-3">
          <div className="tag tag-outline cases-4">{t("Casos de éxito", "Case studies")}</div>
          <h2 className="cases-5">{t("Resultados reales, no promesas.", "Real results, not promises.")}</h2>
          <p className="cases-6">
            {t("Una selección de marcas con las que trabajamos en web, redes sociales y Meta Ads.", "A selection of brands we work with across web, social media and Meta Ads.")}
          </p>
        </Fx>
        <Fx as="div" rv delay={90} className="cases-7">
          <button className="cases-8" type="button" aria-pressed={filter === "todos"} onClick={() => setFilter("todos")}>{t("Todos", "All")}</button>
          <button className="cases-8" type="button" aria-pressed={filter === "web"} onClick={() => setFilter("web")}>
            {t("Páginas web", "Web")}
          </button>
          <button className="cases-8" type="button" aria-pressed={filter === "ads"} onClick={() => setFilter("ads")}>Meta Ads</button>
          <button className="cases-8" type="button" aria-pressed={filter === "redes"} onClick={() => setFilter("redes")}>
            {t("Redes sociales", "Social media")}
          </button>
        </Fx>
        <div className="cases-9">
          {CASES.map((c, i) => (
            <Fx key={c.id} as="article" rv delay={(i % 3) * 90} variant="unblur" cat={c.cat} filter={filter} className="fx-host cases-10">
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
        <div className="cases-18">
          <div className="cases-19">
            {[0, 1].map((k) => (
              <div key={k} className="cases-20" aria-hidden={k === 1 || undefined}>
                {CASES.map((c) => <span key={c.id}>{c.name.toUpperCase()}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
