import Fx from '../components/Fx'
import ReelVideo from '../components/ReelVideo'
import brunchCasaCelia from '../assets/reels/casacelia-brunch.mp4'
import skincareSparks from '../assets/reels/sparks-skincare.mp4'
import noMejorasCbvem from '../assets/reels/cbvem-no-mejoras.mp4'
import empeceTruestudio from '../assets/EmpecéComoTú.mp4'
import { useLang } from '../i18n/LangContext'
import './Reels.css'

const REELS = [
  { src: brunchCasaCelia, client: 'Casa Celia', title: ['El brunch', 'The brunch'] },
  { src: skincareSparks, client: 'Sparks Insumos', title: ['Productos skincare', 'Skincare products'] },
  { src: noMejorasCbvem, client: 'Beach Voley El Masnou', title: ['Si haces esto, no mejoras', "Do this and you won't improve"] },
  // soft: el pelo tiene detalle muy fino que se ve dentado al reducirlo; se suaviza un poco
  { src: empeceTruestudio, client: 'Truestudio', title: ['Empecé como tú', 'I started just like you'], soft: true },
]

export default function Reels() {
  const { t } = useLang()

  return (
    <section className="reels-1" id="contenido">
      <div className="reels-2">
        <Fx as="div" rv className="reels-3">
          <a className="tag tag-accent reels-4" href="https://www.instagram.com/impulness.es/" target="_blank" rel="noopener">@impulness.es</a>
          <h2 className="reels-5">{t("Contenido que no solo gusta,", "Content that doesn't just get likes —")} <span className="hl hl-blue">{t("convierte.", "it converts.")}</span></h2>
          <p className="reels-6">
            {t("Algunos de los Reels que grabamos y editamos para nuestros clientes: formatos verticales pensados para hacer crecer marcas y atraer clientes.", "Some of the Reels we shoot and edit for our clients: vertical formats built to grow brands and attract customers.")}
          </p>
        </Fx>
        <div className="reels-7">
          {REELS.map((r, i) => (
            <Fx key={r.client} as="article" rv delay={i * 80} variant="settle" className="reels-8">
              <ReelVideo src={r.src} soft={r.soft} label={`${r.client} — ${t(r.title[0], r.title[1])}`} />
              <div className="reels-9">
                <div className="reels-10">{r.client}</div>
                <div className="reels-11">{t(r.title[0], r.title[1])}</div>
              </div>
            </Fx>
          ))}
        </div>
        <Fx as="div" rv className="reels-13">
          <a className="btn btn-secondary reels-14" href="https://www.instagram.com/impulness.es/" target="_blank" rel="noopener">
            {t("Síguenos en Instagram", "Follow us on Instagram")}
          </a>
        </Fx>
      </div>
    </section>
  )
}
