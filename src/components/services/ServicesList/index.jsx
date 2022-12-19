import Container from '../../shared/container'
import Flex from '../../shared/flex'
import Information from '../../shared/information'
import MyImage from '../../shared/myimage'
import Title from '../../shared/title'
import ServiceItem from './ServiceItem'

const ServicesList = () => {
  const base = [
    { text: 'Visite virtuelle en 3D' },
    { text: 'Tags informatifs intégrés à la visite' },
    { text: 'Outil de mesure de l’espace 3D' },
    { text: 'Photos 360°' },
  ]
  const partage = [
    { text: 'Intégration de la visite à votre site web' },
    { text: 'Partage de la visite sur les réseaux, par mail, etc' },
    { text: 'Visite disponible sur mobile et pc' },
  ]
  const petitPLus = [
    { text: 'Vidéo teaser de votre espace' },
    { text: 'Plan schématique 2D' },
    { text: 'Reportage photo' },
    { text: 'Immersion totale via un casque VR' },
  ]
  return (
    <div className="pt-20 md:px-40 px-5 bg-[#1A2341] w-full md:flex md:justify-between ">
      <ServiceItem infos={base} title="La base de" sub="votre visite" />
      <ServiceItem
        infos={partage}
        title="Partage & intégration de"
        sub="votre visite"
      />
      <ServiceItem
        infos={petitPLus}
        title="Les petits plus pour"
        sub="votre visite"
      />
    </div>
  )
}
export default ServicesList
