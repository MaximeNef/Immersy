import Flex from '../flex'
import FormSubmitBtn from '../formSubmitBtn'
import Input from '../input'
import Title from '../title'

const ContactForm = ({ data, setData, textarea, selected }) => {
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
          />

          <Input
            placeholder={'Nom*'}
            elementType={'input'}
            required
            data={data.nom}
            setData={setData}
            name="nom"
          />
        </Flex>
        <Input
          placeholder={'Email*'}
          elementType={'input'}
          required
          inputType={'email'}
          data={data.mail}
          setData={setData}
          name="mail"
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
        <FormSubmitBtn text="Envoyer" colorBg="blue" />
      </div>
    </>
  )
}
export default ContactForm
