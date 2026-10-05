import Fx from '../components/Fx'
import jessica from '../assets/Jessica.jpg'
import casaCelia from '../assets/LogoCasaCelia.png'
import { useLang } from '../i18n/LangContext'
import './Testimonials.css'

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section className="testimonials-1">
      <div className="testimonials-2">
        <Fx as="div" rv className="testimonials-3">
          <div className="tag tag-outline testimonials-4">{t("Testimonios", "Testimonials")}</div>
          <h2 className="testimonials-5">{t("Lo que dicen quienes ya confían en Impulness", "What the people who trust Impulness say")}</h2>
        </Fx>
        <div className="testimonials-6">
          <Fx as="blockquote" rv variant="settle" className="testimonials-7">
            <div className="testimonials-8">★★★★★</div>
            <p className="testimonials-9">
              “Este equipo de marketing es increíble. Hemos experimentado un crecimiento excepcional, tanto en seguidores como en interacciones, en nuestros canales de Instagram y Facebook. El equipo es muy profesional y creativo; toman decisiones basadas en datos analíticos, no en suposiciones. Investigan qué funciona y adaptan la estrategia para ayudar a que el negocio crezca. Hemos visto un aumento en las ventas desde que empezamos a trabajar con ellos, y el nivel de comunicación y organización que ofrecen transmite seguridad en la relación laboral. Los recomiendo encarecidamente para gestionar tanto las acciones orgánicas como las campañas de pago en redes sociales. ¡Gracias por todo!”
            </p>
            <footer className="testimonials-10">
              <img className="testimonials-15" src={casaCelia} alt="Casa Celia" width="34" height="34" loading="lazy" decoding="async" />
              <div>
                <div className="testimonials-12">Casa Celia</div>
                <div className="testimonials-13">{t("Brunch sin gluten", "Gluten-free brunch")}</div>
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
