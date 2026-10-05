import Fx from '../components/Fx'
import GlowFollower from '../components/GlowFollower'
import RotatingWord from '../components/RotatingWord'
import { WHATSAPP_URL } from '../config'
import silk from '../assets/silk.webp'
import { useLang } from '../i18n/LangContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero-1" id="top">
      <Fx as="div" parallax={.22} className="hero-2">
        <div className="hero-3">
          <img className="hero-4" src={silk} alt="" decoding="async" />
          <img className="hero-5" src={silk} alt="" decoding="async" />
        </div>
        <div className="hero-6"></div>
      </Fx>
      <div className="hero-7"></div>
      <div className="hero-8"></div>
      <GlowFollower className="hero-9" />
      <div className="hero-10">
        <div>
          <Fx as="div" rv className="tag tag-accent hero-11">
            <span className="hero-12"></span>
            <span>{t("Agencia de marketing digital", "Digital marketing agency")}</span>
          </Fx>
          <h1 className="hero-13">
            <Fx as="span" rv delay={120} variant="lineup" className="hero-14">{t("Diseñamos, publicamos y medimos.", "We design, publish and measure.")}</Fx>
            <Fx as="span" rv delay={280} variant="lineup" className="hero-14"><span className="hero-15">{t("Tú solo ves los resultados.", "You just see the results.")}</span></Fx>
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
          <Fx as="div" rv delay={800} variant="lineup" className="hero-21">
            <span>{t("Especialistas en", "Specialists in")}</span>
            <RotatingWord className="hero-22" es={["Meta Ads", "Páginas web", "Redes sociales", "Fotografía", "Diseño"]} en={["Meta Ads", "Websites", "Social media", "Photography", "Design"]} />
          </Fx>
          <Fx as="div" rv delay={900} variant="lineup" className="hero-23">
            <div className="hero-24">
              <div className="hero-25"></div>
              <div className="hero-26"></div>
              <div className="hero-27"></div>
            </div>
            <div className="hero-28">
              <span className="hero-29">{t("8 marcas", "8 brands")}</span>
              {" "}
              <span>{t("— que ya escalan con Impulness", "— already scaling with Impulness")}</span>
            </div>
          </Fx>
        </div>
        <Fx as="div" parallax={-.12} className="hero-30">
          <div className="hero-31"></div>
          <div className="hero-32">
            <div className="hero-33">
              <div className="hero-34"></div>
              <div className="hero-35">
                <div className="hero-36">
                  <div className="hero-37">
                    <div className="hero-38">
                      <span className="hero-39"></span>
                      <span className="hero-39"></span>
                      <span className="hero-39"></span>
                    </div>
                    <div className="hero-40">impulness.es</div>
                  </div>
                  <div className="hero-41">
                    <div className="hero-42">
                      <div className="hero-43">
                        <div className="hero-44"></div>
                        <div className="hero-45"></div>
                        <div className="hero-46">
                          <div className="hero-47"></div>
                          <div className="hero-48"></div>
                        </div>
                      </div>
                      <div className="hero-49"></div>
                    </div>
                    <div className="hero-50">
                      <div className="hero-51">
                        <div className="hero-52"></div>
                        <div className="hero-53"></div>
                      </div>
                      <div className="hero-51">
                        <div className="hero-54"></div>
                        <div className="hero-55"></div>
                      </div>
                      <div className="hero-51">
                        <div className="hero-56"></div>
                        <div className="hero-57"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-58"></div>
                <div className="hero-59"></div>
              </div>
            </div>
            <div className="hero-60">
              <div className="hero-61"></div>
            </div>
          </div>
        </Fx>
      </div>
      <Fx as="div" rv delay={1050} variant="lineup" className="hero-62">
        <div className="hero-63">
          <span>{t("Desliza", "Scroll")}</span>
          <span className="hero-64">
            <span className="hero-65"></span>
          </span>
        </div>
      </Fx>
    </section>
  )
}
