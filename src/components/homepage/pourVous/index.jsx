import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import Description from '../../shared/description'
import Information from '../../shared/information'
import Title from '../../shared/title'

const PourVous = () => {
  const infos = [
    { text: 'Visite virtuelle en 3D' },
    { text: 'Vidéo teaser de votre espace' },
    { text: 'Photos 360°' },
    { text: 'Plan schématique 2D' },
    { text: 'Intégration de la visite à votre site web' },
  ]
  return (
    <div className="mx-5 space-y-[50px] mb-5">
      <Title
        color={'black'}
        mainTitle={'Pour vous'}
        subTitle={'nous faisons ce qu’il faut'}
      />
      <Description
        color="black"
        text={
          'Chaque collaboration est unique, c’est pourquoi notre objectif est de vous apporter exactement ce dont vous avez besoin. '
        }
      />
      <Information infos={infos} />
      <Btn1 link={'/services'} colorBg={'blue'} text={'Nos services'} />
    </div>
  )
}
export default PourVous
