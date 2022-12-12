import { useRouter } from 'next/router'
import { useState } from 'react'
import CarteContact from '../../shared/cartecontact'
import ContactForm from '../../shared/contact'
import Input from '../../shared/input'
import Title from '../../shared/title'

const TarifForm = ({ surfaceInfo }) => {
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

  const handleClick = (value) => {
    setForm((prevData) => ({
      ...prevData,
      selected: value.text,
    }))
  }

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
        superficie: form.superficie,
        surfaceInfo: surfaceInfo,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    router.push('/envoi')
  }

  return (
    <div className="mx-5 mt-12">
      <div className="mb-5">
        <Title mainTitle="Je suis un ..." />
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="space-y-[16px] mb-[50px]">
          <CarteContact
            text="Particulier"
            handleClick={handleClick}
            selected={form.selected}
          />
          <CarteContact
            text="Professionel"
            handleClick={handleClick}
            selected={form.selected}
          />
        </div>
        <div className="mb-[30px]">
          <div className="mb-5">
            <Title mainTitle="Nombres de biens ..." />
          </div>
          <Input
            placeholder={'Nombre de biens à virtualiser'}
            elementType="input"
            inputType="number"
            data={form.nombreBiens}
            setData={setForm}
            name="nombreBiens"
          />
        </div>
        <div className="mb-10">
          <div className="mb-5">
            <Title mainTitle="Superficie totale ..." />
          </div>
          <Input
            placeholder={'Nombre de m²'}
            elementType="input"
            inputType="number"
            data={form.superficie}
            setData={setForm}
            name="superficie"
          />
        </div>
        <ContactForm
          data={form}
          setData={setForm}
          textarea={false}
          selected={form.selected}
        />
      </form>
    </div>
  )
}

export default TarifForm
