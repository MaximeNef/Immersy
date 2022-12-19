import { useRouter } from 'next/router'
import Title from '../../../components/shared/title'
import CarteContact from '../../shared/carteContact'
const ContactezNous = ({ isSelected, setIsSelected }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/tarifs/contact')
  }

  const handleClickModal = () => {
    console.log('testttt')
    setHideModal(() => (hideModal = true))
  }

  return (
    <div className="mt-32 mx-5">
      <div className="mb-5 md:text-center">
        <Title mainTitle="Contactez-nous" subTitle="et laissez vous guider" />
      </div>
      <div className="space-y-[20px] mb-[50px]">
        <CarteContact
          text="Demande de prix"
          handleClick={handleClick}
          arrow={true}
        />
        <CarteContact
          text="Autre"
          handleClick={handleClickModal}
          arrow={true}
        />
      </div>
    </div>
  )
}

export default ContactezNous
