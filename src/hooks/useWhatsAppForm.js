import { useCallback, useState } from 'react'
import { WHATSAPP_URL } from '../config'

/**
 * Formulario de contacto → abre WhatsApp con los datos ya escritos.
 * (No hay servidor ni base de datos: el mensaje sale desde el móvil/ordenador de quien lo envía.)
 */
export function useWhatsAppForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = useCallback((ev) => {
    ev.preventDefault()
    const d = new FormData(ev.currentTarget)
    const servicios = d.getAll('servicio').join(', ') || '—'
    const lines = [
      'Hola Impulness, quiero una auditoría gratuita.',
      '',
      `Nombre: ${d.get('nombre') || ''}`,
      `Email: ${d.get('email') || ''}`,
      `Teléfono: ${d.get('telefono') || ''}`,
      `Web / Instagram: ${d.get('web') || '—'}`,
      `Me interesa: ${servicios}`,
      '',
      d.get('mensaje') || '',
    ]
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    setSent(true)
  }, [])

  return { onSubmit, sent }
}
