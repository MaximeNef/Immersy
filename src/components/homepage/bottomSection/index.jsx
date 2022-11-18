import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import Description from '../../shared/description'
import Information from '../../shared/information'
import Title from '../../shared/title'

const BottomSection = () => {
  const infos = [
    { text: 'Visite virtuelle en 3D' },
    { text: 'Vidéo teaser de votre espace' },
    { text: 'Photos 360°' },
    { text: 'Plan schématique 2D' },
    { text: 'Intégration de la visite à votre site web' },
  ]
  return (
    <div className="mx-5 space-y-[50px] mb-10 mt-2">
      <Title
        color={'black'}
        mainTitle={'Votre projet'}
        subTitle={'notre savoir-faire'}
      />
      <Description
        color="black"
        text={
          'Parlez-nous de votre projet, que ce soit pour votre entreprise ou pour vos clients, nous avons la solution adaptée.'
        }
      />
      <Btn1 link={'/'} colorBg={'blue'} text={'Contact'} />
    </div>
  )
}
export default BottomSection
