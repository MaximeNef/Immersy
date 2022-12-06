import Flex from '../flex'
import FormSubmitBtn from '../formSubmitBtn'
import Input from '../input'
import Title from '../title'

const ContactForm = ({ data, setData, textarea }) => {
  console.log(data, 'data')

  return (
    <>
      <Title mainTitle={'Recontactez-moi ici...'} />
      <div className="space-y-5 mt-[40px]">
        <Flex className={'space-x-2'}>
          <Input
            placeholder={'Prénom*'}
            type="input"
            data={data.prenom}
            setData={setData}
            name="prenom"
          />
          <Input
            placeholder={'Nom*'}
            type="input"
            data={data.nom}
            setData={setData}
            name="nom"
          />
        </Flex>
        <Input
          placeholder={'Email*'}
          type="input"
          data={data.mail}
          setData={setData}
          name="mail"
        />
        <Input
          placeholder={'Nom d’entreprise'}
          type="input"
          data={data.entreprise}
          setData={setData}
          name="entreprise"
        />
        <Input
          placeholder={'Téléphone'}
          type="input"
          data={data.tel}
          setData={setData}
          name="tel"
        />
        {textarea ? (
          <Input
            placeholder={'Votre question / message'}
            type="textarea"
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
