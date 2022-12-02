import Flex from '../flex'
import Input from '../input'
import Title from '../title'

const ContactForm = ({ data, setData }) => {
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
            attribut="prenom"
          />
          <Input
            placeholder={'Nom*'}
            type="input"
            data={data.nom}
            setData={setData}
            attribut="nom"
          />
        </Flex>
        <Input
          placeholder={'Email*'}
          type="input"
          data={data.mail}
          setData={setData}
          attribut="mail"
        />
        <Input
          placeholder={'Nom d’entreprise'}
          type="input"
          data={data.entreprise}
          setData={setData}
          attribut="entreprise"
        />
        <Input
          placeholder={'Téléphone'}
          type="input"
          data={data.tel}
          setData={setData}
          attribut="tel"
        />
      </div>
    </>
  )
}
export default ContactForm
