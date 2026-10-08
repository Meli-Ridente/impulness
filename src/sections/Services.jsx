import Fx from '../components/Fx'
import { useLang } from '../i18n/LangContext'
import './Services.css'

// Iconos de línea (trazos estilo Lucide) para las tarjetas de servicio
const ICONS = {
  growth: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>,
  code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
  camera: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></>,
  pen: <><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>,
}

function Icon({ name }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

export default function Services() {
  const { t } = useLang()

  return (
    <section className="services-1" id="servicios">
      <div className="services-2">
        <div className="services-3">
          <Fx as="div" rv>
            <div className="tag tag-outline services-4">{t("Sistema Impulness 360°", "Impulness 360° system")}</div>
            <h2 className="services-5">{t("Cinco servicios,", "Five services,")} <span className="script">{t("un solo equipo", "one team")}</span></h2>
          </Fx>
          <Fx as="p" rv delay={100} className="services-6">
            {t("No vendemos servicios aislados: la web, las campañas, las redes, la fotografía y el diseño trabajan como una sola maquinaria.", "We don't sell isolated services: web, ads, social media, photography and design work as one machine.")}
          </Fx>
        </div>
        <div className="services-7">
          <Fx as="article" rv variant="settle" tilt className="card fx-host services-8">
            <div className="services-9">
              <div className="services-10"><Icon name="growth" /></div>
              <span className="tag tag-accent services-11">{t("Incluido en tu plan de redes", "Included in your social media plan")}</span>
            </div>
            <h3 className="services-12">Meta Ads</h3>
            <p className="services-13">
              {t("Campañas en Instagram y Facebook con objetivos claros desde el primer euro: estructura correcta, eventos de conversión bien configurados y optimización semanal. Sin humo, con seguimiento real del gasto.", "Instagram and Facebook campaigns with clear goals from the first euro: the right structure, properly configured conversion events and weekly optimisation. No hype, with real spend tracking.")}
            </p>
            <div className="services-14">
              <span className="tag tag-neutral services-15">{t("Eventos de conversión", "Conversion events")}</span>
              <span className="tag tag-neutral services-15">{t("Optimización semanal", "Weekly optimisation")}</span>
              <span className="tag tag-neutral services-15">Retargeting</span>
            </div>
          </Fx>
          <Fx as="article" rv delay={90} variant="settle" tilt className="card fx-host services-8">
            <div className="services-9">
              <div className="services-10"><Icon name="code" /></div>
              <span className="tag tag-accent services-11">{t("Desde 250€", "From 250€")}</span>
            </div>
            <h3 className="services-12">{t("Desarrollo web", "Web development")}</h3>
            <p className="services-13">
              {t("Páginas y tiendas online rápidas, pensadas para convertir visitas en clientes, no solo para quedar bonitas.", "Fast websites and online stores, built to turn visits into customers, not just to look nice.")}
            </p>
            <div className="services-14">
              <span className="tag tag-neutral services-15">Landings</span>
              <span className="tag tag-neutral services-15">E-commerce</span>
              <span className="tag tag-neutral services-15">{t("SEO técnico", "Technical SEO")}</span>
            </div>
          </Fx>
          <Fx as="article" rv delay={180} variant="settle" tilt className="card fx-host services-8 services-8--feature theme-dark">
            <div className="services-9">
              <div className="services-10"><Icon name="instagram" /></div>
              <span className="tag tag-accent services-11">{t("Desde 300€/mes", "From 300€/mo")}</span>
            </div>
            <h3 className="services-12">{t("Gestión de redes sociales", "Social media management")}</h3>
            <p className="services-13">
              {t("Contenido, calendario y comunidad gestionados de forma constante, con una línea visual coherente con tu marca.", "Content, calendar and community managed consistently, with a visual style that stays true to your brand.")}
            </p>
            <div className="services-14">
              <span className="tag tag-neutral services-15">{t("Calendario editorial", "Editorial calendar")}</span>
              <span className="tag tag-neutral services-15">Reels</span>
              <span className="tag tag-neutral services-15">{t("Comunidad", "Community")}</span>
            </div>
          </Fx>
          <Fx as="article" rv delay={270} variant="settle" tilt className="card fx-host services-8">
            <div className="services-9">
              <div className="services-10"><Icon name="camera" /></div>
              <span className="tag tag-accent services-11">{t("Desde 60€/hora", "From 60€/hour")}</span>
            </div>
            <h3 className="services-12">{t("Fotografía", "Photography")}</h3>
            <p className="services-13">
              {t("Sesiones de producto, local y equipo para que tu contenido no dependa del móvil ni de bancos de imágenes.", "Product, venue and team shoots so your content doesn't depend on a phone camera or stock photos.")}
            </p>
            <div className="services-14">
              <span className="tag tag-neutral services-15">{t("Producto", "Product")}</span>
              <span className="tag tag-neutral services-15">{t("Local", "Venue")}</span>
              <span className="tag tag-neutral services-15">{t("Equipo", "Team")}</span>
            </div>
          </Fx>
          <Fx as="article" rv delay={360} variant="settle" tilt className="card fx-host services-8">
            <div className="services-9">
              <div className="services-10"><Icon name="pen" /></div>
              <span className="tag tag-accent services-11">{t("Marca coherente", "Consistent brand")}</span>
            </div>
            <h3 className="services-12">{t("Diseño gráfico", "Graphic design")}</h3>
            <p className="services-13">
              {t("Identidad de marca, piezas para redes, cartelería y todo el material que necesita tu negocio para verse como uno solo, sea cual sea el canal.", "Brand identity, social media assets, signage and everything your business needs to look like one brand, whatever the channel.")}
            </p>
            <div className="services-14">
              <span className="tag tag-neutral services-15">{t("Identidad de marca", "Brand identity")}</span>
              <span className="tag tag-neutral services-15">{t("Piezas para redes", "Social assets")}</span>
              <span className="tag tag-neutral services-15">{t("Cartelería", "Signage")}</span>
            </div>
          </Fx>
        </div>
      </div>
    </section>
  )
}
