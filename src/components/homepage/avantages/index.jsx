import AvantageItems from '../../shared/AvantageItems'
import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import Title from '../../shared/title'

const Avantages = () => {
  const avantages = [
    {
      img: '/assets/24-7.svg',
      title: 'ACCESSIBLE 24/24',
      subtitle:
        'Vos clients ont accès au jumeau virtuel du bien à tout moment.',
    },
    {
      img: '/assets/monde.svg',
      title: 'VISIBLE PARTOUT',
      subtitle:
        'Votre visite peut être visionnée peu importe ou vous vous situez.',
    },
    {
      img: '/assets/vr.svg',
      title: 'VISITE GUIDEE',
      subtitle:
        'Réalisation d’un vidéo “visite guidée” permetant de montrer les points forts de votre espace.',
    },
  ]
  return (
    <Container>
      <div id="blue-clip" className="w-full h-20 mb-[-1px]" />
      <Container className="bg-[#1A2341] py-5 ">
        <div className="mx-5 md:mx-40   space-y-[35px] md:space-y-[90px] md:mb-[90px]">
          <Title
            mainTitle="Les avantages"
            subTitle="d’une visite virtuelle"
            color="text-white"
          />

          <AvantageItems color="text-white" avantages={avantages} />

          <Btn1 link="/services" text="En savoir plus" />
        </div>
      </Container>
      <div id="blue-wave" className="w-full h-20" />
    </Container>
  )
}

export default Avantages
