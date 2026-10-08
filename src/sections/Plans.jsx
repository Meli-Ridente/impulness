import Fx from '../components/Fx'
import { WHATSAPP_URL } from '../config'
import { useLang } from '../i18n/LangContext'
import './Plans.css'

export default function Plans() {
  const { t } = useLang()

  return (
    <section className="plans-1 theme-dark" id="planes">
      <div className="plans-2">
        <div className="plans-3">
          <Fx as="div" rv>
            <div className="tag tag-outline plans-4">{t("Planes mensuales", "Monthly plans")}</div>
            <h2 className="plans-5">{t("Todo en un", "Everything in")} <span className="script">{t("mismo sistema.", "one system.")}</span></h2>
          </Fx>
          <Fx as="p" rv delay={90} className="plans-6">
            {t("Web, campañas en Meta y gestión de redes trabajando juntas, no por separado. Empieza con un diagnóstico gratuito por WhatsApp: en un vídeo corto te decimos qué está fallando y qué haríamos distinto.", "Web, Meta campaigns and social media working together, not separately. Start with a free diagnosis on WhatsApp: in a short video we tell you what isn't working and what we would do differently.")}
          </Fx>
        </div>
        <div className="plans-7">
          <Fx as="article" rv variant="settle" className="card plans-8">
            <div className="plans-9">{t("Plan esencial", "Essential plan")}</div>
            <div className="plans-10">
              <span className="plans-11">300€</span>
              <span className="plans-12">/ mes</span>
            </div>
            <div className="plans-13">{t("6 publicaciones + 1 campaña", "6 posts + 1 campaign")}</div>
            <div className="plans-14">
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("Estrategia mensual básica", "Basic monthly strategy")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("1 jornada de grabación y fotografía", "1 shooting and photography day")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("5 publicaciones para Instagram", "5 Instagram posts")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("Edición de vídeos y diseño de carruseles", "Video editing and carousel design")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("1 campaña mensual en Meta Ads + revisiones", "1 monthly Meta Ads campaign + reviews")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("Gestión de DMs y comentarios", "DM and comment management")}</span>
              </div>
            </div>
            <a className="btn btn-secondary btn-block plans-17" href={WHATSAPP_URL} target="_blank" rel="noopener">
              {t("Consultar este plan", "Ask about this plan")}
            </a>
          </Fx>
          <Fx as="article" rv delay={110} variant="settle" className="card plans-18">
            <span className="tag tag-accent plans-19">{t("Más elegido", "Most chosen")}</span>
            <div className="plans-9">{t("Plan Crecimiento", "Growth plan")}</div>
            <div className="plans-10">
              <span className="plans-11">500€</span>
              <span className="plans-12">/ mes</span>
            </div>
            <div className="plans-13">{t("8 publicaciones + 1 campaña", "8 posts + 1 campaign")}</div>
            <div className="plans-14">
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("Todo lo del plan esencial", "Everything in the Essential plan")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("8 publicaciones mensuales", "8 monthly posts")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("Producción ampliada de Reels", "Extended Reels production")}</span>
              </div>
              <div className="plans-15">
                <span className="plans-16">✓</span>
                <span>{t("1 campaña mensual en Meta Ads + optimización semanal", "1 monthly Meta Ads campaign + weekly optimisation")}</span>
              </div>
            </div>
            <a className="btn btn-primary btn-block plans-20" href={WHATSAPP_URL} target="_blank" rel="noopener">
              {t("Consultar este plan", "Ask about this plan")}
            </a>
          </Fx>
          <Fx as="article" rv delay={220} variant="settle" className="card plans-21">
            <div className="plans-9">{t("Proyectos web", "Web projects")}</div>
            <div className="plans-10">
              <span className="plans-12">{t("desde", "from")}</span>
              <span className="plans-11">250€</span>
            </div>
            <div className="plans-13">{t("Proyecto puntual", "One-off project")}</div>
            <p className="plans-22">
              {t("Landings, webs corporativas y tiendas online rápidas, pensadas para convertir visitas en clientes. El precio depende del alcance, el número de secciones y las integraciones: te pasamos presupuesto tras una llamada de 15 minutos.", "Fast landing pages, corporate sites and online stores, built to turn visits into customers. Price depends on scope, number of sections and integrations: we send you a quote after a 15-minute call.")}
            </p>
            <div className="plans-23">
              <a className="btn btn-secondary btn-block plans-24" href={WHATSAPP_URL} target="_blank" rel="noopener">
                {t("Pedir presupuesto", "Get a quote")}
              </a>
            </div>
          </Fx>
        </div>
      </div>
    </section>
  )
}
