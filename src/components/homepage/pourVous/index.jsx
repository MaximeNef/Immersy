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
    { text: 'Outil de mesure de l’espace 3D' },
  ]
  return (
    <div className="mx-5 md:mx-40 mb-[50px] md:mb-[170px] mt-20    ">
      <div className="md:flex md:mb-20">
        <div className="md:w-[30%] ">
          <Title
            color={'black'}
            mainTitle={'Pour vous'}
            subTitle={'nous faisons ce qu’il faut'}
          />

          <div className="my-[50px] md:mb-0 md:mt-[90px] mx-auto ">
            <Description
              color="black"
              text={
                'Chaque collaboration est unique, c’est pourquoi notre objectif est de vous apporter exactement ce dont vous avez besoin.'
              }
            />
          </div>
        </div>

        <div className="mb-[70px] md:mb-[0px]  w-full mt-auto  ">
          <Information infos={infos} />
        </div>
      </div>
      <Btn1 link={'/services'} colorBg={'blue'} text={'Nos services'} />
    </div>
  )
}
export default PourVous
