import { useRouter } from 'next/router'
import { useState } from 'react'
import ContactForm from '../../shared/contact'

const ModalForm = () => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    mail: '',
    entreprise: '',
    tel: '',
    selected: '',
    nombreBiens: '',
    superficie: '',
  })

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        nom: form.nom,
        prenom: form.prenom,
        mail: form.mail,
        entreprise: form.entreprise,
        telephone: form.tel,
        selected: form.selected,
        nombreBiens: form.nombreBiens,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    router.push('/envoi')
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <ContactForm data={form} setData={setForm} textarea={true} />
    </form>
  )
}

export default ModalForm
