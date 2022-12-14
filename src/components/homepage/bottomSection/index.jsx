import Btn1 from '../../shared/btn1'
import Description from '../../shared/description'
import MyImage from '../../shared/myimage'
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
    <div className="mx-5  mb-10 md:mb-0 mt-2 md:px-40 md:mx-0 relative md:h-[45vw]  md:mt-[-50px]   ">
      <div className="space-y-[50px] lg:flex lg:flex-col lg:w-[40%] lg:pt-[15%] md:mt-20 lg:mt-0">
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
        <div className="lg:mr-auto">
          <Btn1 link={'/contact'} colorBg={'blue'} text={'Contact'} />
        </div>
      </div>
      <MyImage
        src={'/assets/footerImage.png'}
        objectFit="cover"
        layout={'fill'}
        className={'absolute z-[-20] hidden lg:inline-flex '}
      />
    </div>
  )
}
export default BottomSection
