import ribbon from '../assets/ribbon.webp'
import './Divider.css'

export default function Divider() {
  return (
    <div className="divider-1">
      <div className="divider-2">
        <img className="divider-3" src={ribbon} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="divider-4"></div>
    </div>
  )
}
