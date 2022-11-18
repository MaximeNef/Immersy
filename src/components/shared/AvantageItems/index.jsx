import { useState } from 'react'
import Container from '../container'
import Flex from '../Flex'
import MyImage from '../MyImage'

const AvantageItems = ({ avantages, color }) => {
  // const Avantages = [
  //   {
  //     img: '/assets/24-7.svg',
  //     title: 'Accessible 24/24',
  //     subtitle:
  //       'Vos clients ont accès au jumeau virtuel du bien à tout moment.',
  //   },
  //   {
  //     img: '/assets/monde.svg',
  //     title: 'VISIBLE PARTOUT',
  //     subtitle:
  //       'Votre visite peut être visionnée peu importe ou vous vous situez.',
  //   },
  //   {
  //     img: '/assets/vr.svg',
  //     title: 'VISITE GUIDEE',
  //     subtitle:
  //       'Réalisation d’un vidéo “visite guidée” permetant de montrer les points forts de votre espace.',
  //   },
  //   {
  //     img: '/assets/immersion.svg',
  //     title: 'Immersion totale',
  //     subtitle:
  //       'Grâce à la technologie VR, il est possible de diffuser votre bien dans un casque VR pour une immersion totale.',
  //   },
  //   {
  //     img: '/assets/mesure.svg',
  //     title: 'PRISE DE MESURES',
  //     subtitle:
  //       "Il est possible pour vos visiteurs de prendre des mesures à l'intérieur de votre visite virtuelle.",
  //   },
  //   {
  //     img: '/assets/plan.svg',
  //     title: 'PLAN 2D',
  //     subtitle:
  //       'Nous réalisons sur demande des plans 2D schématique sur demande.',
  //   },
  //   {
  //     img: '/assets/ping.svg',
  //     title: 'TAGS INFORMATIFS',
  //     subtitle:
  //       'Des tags informatifs peuvent être intégrés au sein de la visite virtuelle pour vous permettre de documenter l’espace. Ce tag peut être du texte, une vidéo/photo, un lien web, etc.',
  //   },
  // ]

  return (
    <Container>
      {avantages.map((avantage, i) => {
        return (
          <Flex key={i} className="my-[40px]">
            <Container className="w-fit mr-[25px]">
              <MyImage src={avantage.img} w={50} h={50} />
            </Container>
            <Container className={`${color}`}>
              <p className="mb-1 font-medium tracking-standard text-[20px] ">
                {avantage.title}
              </p>
              <p className=" font-light tracking-standard text-[15px] leading-[22px] ">
                {avantage.subtitle}
              </p>
            </Container>
          </Flex>
        )
      })}
    </Container>
  )
}
export default AvantageItems
