import Fx from '../components/Fx'
import ContactIcon from '../components/ContactIcon'
import { WHATSAPP_URL } from '../config'
import orb from '../assets/orb.webp'
import silk from '../assets/silk.webp'
import { useLang } from '../i18n/LangContext'
import { useWhatsAppForm } from '../hooks/useWhatsAppForm'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  const { onSubmit, sent } = useWhatsAppForm()

  return (
    <section className="contact-1 bg-blobs" id="contacto">
      <Fx as="div" parallax={.14} className="contact-3">
        <img className="contact-4" src={silk} alt="" loading="lazy" decoding="async" />
      </Fx>
      <Fx as="div" parallax={-.2} className="contact-6">
        <img className="contact-7" src={orb} alt="" loading="lazy" decoding="async" />
      </Fx>
      <div className="contact-8">
        <Fx as="div" rv className="contact-9">
          <div className="tag tag-accent contact-10">{t("Auditoría gratis · cupos limitados", "Free audit · limited slots")}</div>
          <h2 className="contact-11">
            {t("¿Y si lo hacemos", "What if we do it")}{" "}
            <span className="hl hl-plum">{t("nosotros?", "for you?")}</span>
          </h2>
          <p className="contact-12">
            {t("Cuéntanos qué necesitas y te respondemos por WhatsApp con una propuesta clara, sin compromiso.", "Tell us what you need and we'll reply on WhatsApp with a clear proposal, no strings attached.")}
          </p>
        </Fx>
        <div className="contact-13">
          <Fx as="form" rv variant="expand" className="contact-14" onSubmit={onSubmit}>
            <div className="contact-15">
              <label className="field">
                <span>{t("Nombre y apellidos *", "Name and surname *")}</span>
                <input className="input" name="nombre" required placeholder="Ej. Lucas García" />
              </label>
              <label className="field">
                <span>{t("Email *", "Email *")}</span>
                <input className="input" type="email" name="email" required placeholder="lucas@empresa.com" />
              </label>
              <label className="field">
                <span>{t("Teléfono / WhatsApp *", "Phone / WhatsApp *")}</span>
                <input className="input" name="telefono" required placeholder="+34 600 000 000" />
              </label>
              <label className="field">
                <span>{t("Web o Instagram actual", "Current website or Instagram")}</span>
                <input className="input" name="web" placeholder="tuempresa.es o @tuempresa" />
              </label>
            </div>
            <div className="contact-16">{t("¿Qué te interesa? (puedes marcar varios)", "What are you interested in? (choose several)")}</div>
            <div className="contact-17">
              <label className="contact-18">
                <input className="contact-19" type="checkbox" name="servicio" value="Página web" />
                <span>
                  <span className="contact-20">{t("Página web", "Website")}</span>
                  <span className="contact-21">{t("Landing, corporativa, e-commerce", "Landing, corporate site, e-commerce")}</span>
                </span>
              </label>
              <label className="contact-18">
                <input className="contact-19" type="checkbox" name="servicio" value="Meta Ads" />
                <span>
                  <span className="contact-20">Meta Ads</span>
                  <span className="contact-21">{t("Campañas, ROAS, tracking", "Campaigns, ROAS, tracking")}</span>
                </span>
              </label>
              <label className="contact-18">
                <input className="contact-19" type="checkbox" name="servicio" value="Gestión de redes" />
                <span>
                  <span className="contact-20">{t("Gestión de redes", "Social media management")}</span>
                  <span className="contact-21">{t("Contenido, alcance, marca", "Content, reach, brand")}</span>
                </span>
              </label>
              <label className="contact-18">
                <input className="contact-19" type="checkbox" name="servicio" value="Community manager" />
                <span>
                  <span className="contact-20">Community manager</span>
                  <span className="contact-21">{t("Reels, DMs, comunidad", "Reels, DMs, community")}</span>
                </span>
              </label>
            </div>
            <label className="field contact-22">
              <span>{t("Cuéntanos brevemente qué necesitas", "Tell us briefly what you need")}</span>
              <textarea className="input contact-23" name="mensaje" rows={4} placeholder="Lorem ipsum dolor sit amet…" />
            </label>
            <Fx as="button" magnet className="btn btn-primary btn-block contact-24" type="submit">
              {t("Enviar por WhatsApp →", "Send by WhatsApp →")}
            </Fx>
            <div className="contact-25" style={sent ? { color: "var(--blue)" } : undefined}>
              {sent ? t("Abriendo WhatsApp con tus datos… si no se abre, escríbenos al +34 684 343 996.", "Opening WhatsApp with your details… if it does not open, message us at +34 684 343 996.") : t("Se abre WhatsApp con tus datos listos para enviar. Sin compromiso.", "Opens WhatsApp with your details ready to send. No commitment.")}
            </div>
          </Fx>
          <Fx as="aside" rv delay={120} variant="expand" className="contact-26">
            <div className="contact-27 theme-dark">
              <h3 className="contact-28">{t("Contacto directo", "Direct contact")}</h3>
              <a className="contact-29" href={WHATSAPP_URL} target="_blank" rel="noopener">
                <span className="contact-30"><ContactIcon name="whatsapp" /></span>
                <span>
                  <span className="contact-31">WhatsApp</span>
                  <span className="contact-32">+34 684 343 996</span>
                </span>
              </a>
              <a className="contact-29" href="mailto:impulness.es@gmail.com">
                <span className="contact-30"><ContactIcon name="mail" /></span>
                <span>
                  <span className="contact-31">Email</span>
                  <span className="contact-32">impulness.es@gmail.com</span>
                </span>
              </a>
              <a className="contact-33" href="https://www.instagram.com/impulness.es/" target="_blank" rel="noopener">
                <span className="contact-30"><ContactIcon name="instagram" /></span>
                <span>
                  <span className="contact-31">Instagram</span>
                  <span className="contact-32">@impulness.es</span>
                </span>
              </a>
            </div>
            <div className="contact-34">
              <h3 className="contact-35">{t("Qué incluye tu auditoría gratis", "What your free audit includes")}</h3>
              <div className="contact-36">
                <div className="contact-37">
                  <span className="contact-38">01</span>
                  <span>{t("Revisión de tu presencia y contenido en Instagram", "Review of your Instagram presence and content")}</span>
                </div>
                <div className="contact-37">
                  <span className="contact-38">02</span>
                  <span>{t("Diagnóstico técnico y de UX de tu web", "Technical and UX diagnosis of your website")}</span>
                </div>
                <div className="contact-37">
                  <span className="contact-38">03</span>
                  <span>{t("Fugas de conversión en tu funnel", "Conversion leaks in your funnel")}</span>
                </div>
                <div className="contact-37">
                  <span className="contact-38">04</span>
                  <span>{t("Hoja de ruta con 3 acciones prioritarias", "Roadmap with 3 priority actions")}</span>
                </div>
              </div>
              <div className="contact-39">
                <span className="contact-40">{t("Tiempo de entrega", "Turnaround")}</span>
                <span className="contact-41">24-48 h</span>
              </div>
            </div>
          </Fx>
        </div>
      </div>
    </section>
  )
}
