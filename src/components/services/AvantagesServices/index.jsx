import AvantageItems from '../../shared/AvantageItems'
import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import Title from '../../shared/title'

const AvantagesServices = () => {
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
    {
      img: '/assets/immersion.svg',
      title: 'IMMERSION TOTALE',
      subtitle:
        'Grâce à la technologie VR, il est possible de diffuser votre bien dans un casque VR pour une immersion totale.',
    },
    {
      img: '/assets/mesure.svg',
      title: 'PRISE DE MESURES',
      subtitle:
        "Il est possible pour vos visiteurs de prendre des mesures à l'intérieur de votre visite virtuelle.",
    },
    {
      img: '/assets/plan.svg',
      title: 'PLAN 2D',
      subtitle:
        'Nous réalisons sur demande des plans 2D schématique sur demande.',
    },
    {
      img: '/assets/ping.svg',
      title: 'TAGS INFORMATIFS',
      subtitle:
        'Des tags informatifs peuvent être intégrés au sein de la visite virtuelle pour vous permettre de documenter l’espace. Ce tag peut être du texte, une vidéo/photo, un lien web, etc.',
    },
  ]

  return (
    <Container>
      <div id="blue-clip" className="w-full h-20 rotate-180" />
      <Container className="py-5 mt-5">
        <div className="mx-5 space-y-[35px] ">
          <Title mainTitle="Les avantages" subTitle="d’une visite virtuelle" />
          <AvantageItems avantages={avantages} />
        </div>
      </Container>
      <div id="blue-wave" className="w-full h-24 rotate-180" />
    </Container>
  )
}

export default AvantagesServices
