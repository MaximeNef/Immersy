import { useRouter } from 'next/router'
import Title from '../../../components/shared/title'
import CarteContact from '../../shared/cartecontact'
const ContactezNous = () => {
  const router = useRouter()

  const handleClick = () => {}

  return (
    <div className="mt-32 mx-5">
      <div className="mb-5">
        <Title mainTitle="Contactez-nous" subTitle="et laissez vous guider" />
      </div>
      <div className="space-y-[16px] mb-[50px]">
        <CarteContact
          text="Demande de prix"
          handleClick={handleClick}
          arrow={true}
        />
        <CarteContact text="Autre" handleClick={handleClick} arrow={true} />
      </div>
    </div>
  )
}

export default ContactezNous
