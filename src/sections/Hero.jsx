import Fx from '../components/Fx'
import RotatingWord from '../components/RotatingWord'
import { WHATSAPP_URL } from '../config'
import truestudio from '../assets/Jessica.jpg'
import cymes from '../assets/cymes_Foto.png'
import casaCelia from '../assets/LogoCasaCelia.png'
import { useLang } from '../i18n/LangContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero-1 theme-dark" id="top">
      <div className="hero-10">
        <div className="hero-copy">
          <Fx as="div" rv className="hero-top">
            <div className="tag tag-outline hero-11">
              <span className="hero-12"></span>
              <span>{t("Agencia de marketing digital", "Digital marketing agency")}</span>
            </div>
            <span className="hero-top-sep" aria-hidden="true"></span>
            <div className="hero-21">
              <span>{t("Especialistas en", "Specialists in")}</span>
              <RotatingWord className="hero-22" es={["Meta Ads", "Páginas web", "Redes sociales", "Fotografía", "Diseño"]} en={["Meta Ads", "Websites", "Social media", "Photography", "Design"]} />
            </div>
          </Fx>
          <h1 className="hero-13">
            <Fx as="span" rv delay={120} variant="lineup" className="hero-14">{t("diseñamos, publicamos", "we design, publish")}</Fx>
            <Fx as="span" rv delay={220} variant="lineup" className="hero-14">{t("y medimos.", "and measure.")}</Fx>
            <Fx as="span" rv delay={320} variant="lineup" className="hero-14 hero-15">
              <span className="script">{t("tú solo ves los", "you just see the")}</span>{" "}
              <span className="hl hl-blue">{t("resultados", "results")}</span>
            </Fx>
          </h1>
          <Fx as="p" rv delay={540} variant="lineup" className="hero-16">
            {t("Somos una agencia de marketing digital en Barcelona. Unimos desarrollo web, campañas de Meta Ads, gestión de redes sociales, fotografía y diseño en un solo equipo, para que no tengas que coordinar cinco proveedores distintos.", "We're a digital marketing agency in Barcelona. We bring web development, Meta Ads campaigns, social media management, photography and design together in one team, so you don't have to coordinate five different suppliers.")}
          </Fx>
          <Fx as="div" rv delay={680} variant="lineup" className="hero-17">
            <Fx as="a" magnet className="btn btn-primary hero-18" href={WHATSAPP_URL} target="_blank" rel="noopener">
              <span>{t("Escríbenos por WhatsApp", "Write on WhatsApp")}</span>
              <span className="hero-19">→</span>
            </Fx>
            <Fx as="a" magnet className="btn btn-secondary hero-20" href="#casos">{t("Ver casos de éxito", "See case studies")}</Fx>
          </Fx>
          <Fx as="div" rv delay={900} variant="lineup" className="hero-23">
            <div className="hero-24">
              <span className="hero-av"><img src={truestudio} alt="Truestudio" width="34" height="34" decoding="async" /></span>
              <span className="hero-av hero-av--cymes"><img src={cymes} alt="Grupo Cymes" height="22" decoding="async" /></span>
              <span className="hero-av hero-av--logo"><img src={casaCelia} alt="Casa Celia" width="34" height="34" decoding="async" /></span>
            </div>
            <div className="hero-28">
              <span className="hero-29">{t("8 marcas", "8 brands")}</span>
              {" "}
              <span>{t("— que ya escalan con Impulness", "— already scaling with Impulness")}</span>
            </div>
          </Fx>
        </div>
      </div>
    </section>
  )
}
