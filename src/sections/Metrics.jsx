import Counter from '../components/Counter'
import Fx from '../components/Fx'
import { useLang } from '../i18n/LangContext'
import './Metrics.css'

export default function Metrics() {
  const { t } = useLang()

  return (
    <section className="metrics-1">
      <div className="metrics-2"></div>
      <div className="metrics-3">
        <Fx as="div" rv>
          <div className="metrics-4">
            <Counter to={6} dec={0} />
          </div>
          <div className="metrics-5">{t("Campañas activas gestionadas ahora mismo", "Active campaigns managed right now")}</div>
        </Fx>
        <Fx as="div" rv delay={90}>
          <div className="metrics-4">
            <Counter to={6} dec={0} />
          </div>
          <div className="metrics-5">{t("Sectores distintos, de la cosmética a la construcción", "Different industries, from cosmetics to construction")}</div>
        </Fx>
        <Fx as="div" rv delay={180}>
          <div className="metrics-4">
            <Counter to={2} dec={0} />
          </div>
          <div className="metrics-5">{t("Años de experiencia combinada del equipo", "Years of combined team experience")}</div>
        </Fx>
        <Fx as="div" rv delay={270}>
          <div className="metrics-4">
            <Counter to={100} dec={0} />
            %
          </div>
          <div className="metrics-5">{t("De campañas con seguimiento y reporte", "Of campaigns with tracking and reporting")}</div>
        </Fx>
      </div>
    </section>
  )
}
