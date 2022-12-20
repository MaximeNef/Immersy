import Information from '../../shared/information'
import Title from '../../shared/title'

const PetitsPlus = () => {
  const infos = [
    { text: 'Vidéo teaser de votre espace' },
    { text: 'Plan schématique 2D' },
    { text: 'Reportage photo' },
    { text: 'Immersion totale via un casque VR' },
  ]
  return (
    <div className="bg-[#1A2341] text-white pb-5 md:px-40">
      <div id="blue-wave" className="w-full h-5" />
      <div className="px-5">
        <div className="space-y-[50px] mb-5">
          <Title mainTitle={'Les petits plus pour'} subTitle={'votre visite'} />
          <Information infos={infos} />
        </div>
      </div>
    </div>
  )
}
export default PetitsPlus
