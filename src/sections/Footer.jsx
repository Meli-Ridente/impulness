import { WHATSAPP_URL } from '../config'
import logo from '../assets/logo.webp'
import { useLang } from '../i18n/LangContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer-1 theme-dark">
      <div className="footer-2">
        <div className="footer-3">
          <div>
            <div className="footer-4">
              <img className="footer-5" src={logo} alt="Impulness" loading="lazy" decoding="async" />
              <span className="footer-6">impulness</span>
            </div>
            <p className="footer-7">
              {t("Impulness — Agencia de marketing digital en Barcelona.", "Impulness — Digital marketing agency in Barcelona.")}
            </p>
          </div>
          <div>
            <div className="footer-8">{t("Servicios", "Services")}</div>
            <div className="footer-9">
              <a href="#servicios">Web</a>
              <a href="#servicios">Meta Ads</a>
              <a href="#servicios">{t("Redes sociales", "Social media")}</a>
              <a href="#servicios">{t("Fotografía", "Photography")}</a>
              <a href="#servicios">{t("Diseño", "Design")}</a>
            </div>
          </div>
          <div>
            <div className="footer-8">{t("Contacto", "Contact")}</div>
            <div className="footer-9">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">+34 684 343 996</a>
              <a href="mailto:impulness.es@gmail.com">impulness.es@gmail.com</a>
              <a href="https://www.instagram.com/impulness.es/" target="_blank" rel="noopener">@impulness.es</a>
            </div>
          </div>
        </div>
        <div className="footer-10">
          <span>
            © 2026 Impulness.
            {" "}
            <span>{t("Todos los derechos reservados.", "All rights reserved.")}</span>
          </span>
          <span>{t("Barcelona, España", "Barcelona, Spain")}</span>
        </div>
      </div>
    </footer>
  )
}
