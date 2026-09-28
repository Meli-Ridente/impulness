import Fx from '../components/Fx'
import jessica from '../assets/Jessica.jpg'
import { useLang } from '../i18n/LangContext'
import './Testimonials.css'

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section className="testimonials-1">
      <div className="testimonials-2">
        <Fx as="div" rv className="testimonials-3">
          <div className="tag tag-outline testimonials-4">{t("Testimonios (lorem)", "Testimonials (lorem)")}</div>
          <h2 className="testimonials-5">{t("Lo que dicen quienes ya confían en Impulness", "What the people who trust Impulness say")}</h2>
        </Fx>
        <div className="testimonials-6">
          <Fx as="blockquote" rv variant="settle" className="testimonials-7">
            <div className="testimonials-8">★★★★★</div>
            <p className="testimonials-9">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”
            </p>
            <footer className="testimonials-10">
              <div className="testimonials-11"></div>
              <div>
                <div className="testimonials-12">Nombre Apellido</div>
                <div className="testimonials-13">Cargo · Sparks Insumos</div>
              </div>
            </footer>
          </Fx>
          <Fx as="blockquote" rv delay={100} variant="settle" className="testimonials-7">
            <div className="testimonials-8">★★★★★</div>
            <p className="testimonials-9">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
            </p>
            <footer className="testimonials-10">
              <div className="testimonials-14"></div>
              <div>
                <div className="testimonials-12">Nombre Apellido</div>
                <div className="testimonials-13">Cargo · CVBEM El Masnou</div>
              </div>
            </footer>
          </Fx>
          <Fx as="blockquote" rv delay={200} variant="settle" className="testimonials-7">
            <div className="testimonials-8">★★★★★</div>
            <p className="testimonials-9">
              “Trabajar con Impulness ha sido una experiencia muy positiva. Me gusta especialmente la cercanía y la facilidad para comunicarme con el equipo, porque realmente escuchan lo que necesito y entienden la esencia de mi negocio. Me han ayudado a darle más forma y coherencia a mis redes, aportando ideas y acompañándome durante todo el proceso. Sin duda, estoy muy contenta con el trabajo que estamos haciendo juntos.”
            </p>
            <footer className="testimonials-10">
              <img className="testimonials-15" src={jessica} alt="Jessica Ridente" width="34" height="34" loading="lazy" decoding="async" />
              <div>
                <div className="testimonials-12">Jessica Ridente</div>
                <div className="testimonials-13">{t("Estética", "Beauty")} · Truestudio</div>
              </div>
            </footer>
          </Fx>
        </div>
      </div>
    </section>
  )
}
