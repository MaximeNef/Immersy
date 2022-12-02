import { useState } from 'react'
import BtnStatut from '../../shared/btnStatut'
import ContactForm from '../../shared/contact'
import Input from '../../shared/input'
import Title from '../../shared/title'

const TarifForm = () => {
  const [form, setForm] = useState({
    selected: '',
    nombreBiens: '',
    superficie: '',
    nom: '',
    prenom: '',
    mail: '',
    entreprise: '',
    tel: '',
  })

  const handleClick = (value) => {
    setForm((prevData) => ({
      ...prevData,
      selected: value.text,
    }))
  }

  return (
    <div className="mx-5 mt-12">
      <div className="mb-5">
        <Title mainTitle="Je suis un ..." />
      </div>
      <div className="space-y-[16px] mb-[50px]">
        <BtnStatut
          text="Particulier"
          handleClick={handleClick}
          selected={form.selected}
        />
        <BtnStatut
          text="Professionel"
          handleClick={handleClick}
          selected={form.selected}
        />
      </div>
      <form method="post" /*onSubmit={handleSubmit} */>
        <div className="mb-[30px]">
          <div className="mb-5">
            <Title mainTitle="Nombres de biens ..." />
          </div>
          <Input
            placeholder={'Nombre de biens à virtualiser'}
            type="input"
            data={form.nombreBiens}
            setData={setForm}
            attribut="nombreBiens"
          />
        </div>
        <div className="mb-10">
          <div className="mb-5">
            <Title mainTitle="Superficie totale ..." />
          </div>
          <Input
            placeholder={'Nombre de m²'}
            type="input"
            data={form.superficie}
            setData={setForm}
            attribut="superficie"
          />
        </div>
        <ContactForm data={form} setData={setForm} />
      </form>
    </div>
  )
}

export default TarifForm
