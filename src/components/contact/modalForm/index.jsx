import { useRouter } from 'next/router'
import { useState } from 'react'
import ContactForm from '../../shared/contact'

const ModalForm = ({ setHideModal, hideModal }) => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    message: '',
  })

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        nom: form.nom,
        prenom: form.prenom,
        email: form.email,
        telephone: form.tel,
        selected: form.nom,
        message: form.message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    router.push('/envoi')
  }

  const handleClickModal = () => {
    setHideModal(() => (hideModal = false))
  }

  return (
    <div className="space-y-[30px]">
      <button onClick={handleClickModal} className="font-thin">
        &#8592; Retour
      </button>
      <form method="post" onSubmit={handleSubmit}>
        <ContactForm data={form} setData={setForm} textarea={true} />
      </form>
    </div>
  )
}

export default ModalForm
