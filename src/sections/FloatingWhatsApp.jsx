import ContactIcon from '../components/ContactIcon'
import { WHATSAPP_URL } from '../config'
import { useLang } from '../i18n/LangContext'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const { t } = useLang()

  return (
    <a className="floatingwhatsapp-1" href={WHATSAPP_URL} target="_blank" rel="noopener">
      <span className="floatingwhatsapp-2"><ContactIcon name="whatsapp" size={20} /></span>
      <span>{t("Hablar por WhatsApp", "Chat on WhatsApp")}</span>
    </a>
  )
}
