import Btn1 from '../btn1'
import Description from '../description'
import MyImage from '../myimage'
import Title from '../title'

const Projet = ({ current, blue }) => {
  return (
    <div>
      <div
        className={`px-5 pt-5 relative md:h-[45vw]  ${
          blue ? ' text-white' : null
        }`}
      >
        {' '}
        <div className="md:mx-40 space-y-[50px] md:w-[40%] lg:pt-[5%] md:flex md:flex-col">
          <Title mainTitle={'Votre projet'} subTitle={'notre savoir-faire'} />
          <Description
            text={
              'Parlez-nous de votre projet, que ce soit pour votre entreprise ou pour vos clients, nous avons la solution adaptée.'
            }
          />
          <div className="pt-10 md:pt-0 min-[850px]:pt-10 pb-16 md:mr-auto">
            <Btn1
              text={'Contact'}
              link={'/contact'}
              colorBg={`${blue ? null : 'blue'}`}
            />
          </div>
        </div>
        <MyImage
          src={
            current == 'Nos réalisations'
              ? '/assets/footerImage.png'
              : '/assets/BluefooterImage.png'
          }
          objectFit="cover"
          layout={'fill'}
          className={`absolute z-[-20]   md:inline-flex `}
        />
      </div>{' '}
    </div>
  )
}
export default Projet
