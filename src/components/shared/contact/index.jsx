import { useEffect, useState } from 'react'
import Flex from '../flex'
import FormSubmitBtn from '../formSubmitBtn'
import Input from '../input'
import Title from '../title'

const ContactForm = ({ data, setData, textarea, selected }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    if (
      !(data.prenom == null || data.prenom == '') &&
      !(data.nom == null || data.nom == '') &&
      !(data.email == null) &&
      data.email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [data.prenom, data.nom, data.email])

  return (
    <>
      <Title mainTitle={'Recontactez-moi ici ...'} />

      <div className="space-y-5 mt-[40px]">
        <Flex className={'space-x-2'}>
          <Input
            placeholder={'Prénom*'}
            elementType={'input'}
            required
            data={data.prenom}
            setData={setData}
            name="prenom"
            inputError="Veuillez entrer votre prénom"
          />

          <Input
            placeholder={'Nom*'}
            elementType={'input'}
            required
            data={data.nom}
            setData={setData}
            name="nom"
            inputError="Veuillez entrer votre nom"
          />
        </Flex>
        <Input
          placeholder={'Email*'}
          elementType={'input'}
          required
          inputType={'email'}
          data={data.email}
          setData={setData}
          name="email"
          inputError="Veuillez entrer une adresse email valide"
        />
        {selected == 'Professionel' ? (
          <Input
            placeholder={'Nom d’entreprise'}
            elementType={'input'}
            data={data.entreprise}
            setData={setData}
            name="entreprise"
          />
        ) : null}
        <Input
          placeholder={'Téléphone'}
          elementType={'input'}
          inputType={'number'}
          data={data.tel}
          setData={setData}
          name="tel"
        />
        {textarea ? (
          <Input
            placeholder={'Votre question / message'}
            elementType="textarea"
            data={data.message}
            setData={setData}
            name="message"
          />
        ) : null}
        <FormSubmitBtn
          text="Envoyer"
          colorBg="blue"
          disabled={buttonDisabled}
        />
      </div>
    </>
  )
}
export default ContactForm
