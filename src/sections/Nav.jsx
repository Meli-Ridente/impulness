import NavBar from '../components/NavBar'
import logo from '../assets/logo.webp'
import { useLang } from '../i18n/LangContext'
import './Nav.css'

export default function Nav() {
  const { t, lang, toggleLang } = useLang()

  return (
    <NavBar className="nav-1">
      <div className="nav-2">
        <a className="nav-3" href="#top">
          <img className="nav-4" src={logo} alt="Impulness" decoding="async" />
          <span className="nav-5">IMPULNESS</span>
        </a>
        <nav className="nav-6">
          <a className="nav-7" href="#top">{t("Inicio", "Home")}</a>
          <a className="nav-7" href="#servicios">{t("Servicios", "Services")}</a>
          <a className="nav-7" href="#casos">{t("Casos", "Case studies")}</a>
          <a className="nav-7" href="#contenido">{t("Contenido", "Content")}</a>
          <a className="nav-7" href="#contacto">{t("Contacto", "Contact")}</a>
        </nav>
        <div className="nav-3">
          <button className="nav-8" type="button" onClick={toggleLang} aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}>{lang === 'en' ? 'ES' : 'EN'}</button>
          <a className="btn btn-primary nav-9" href="#contacto">{t("Auditoría gratis", "Free audit")}</a>
        </div>
      </div>
    </NavBar>
  )
}
