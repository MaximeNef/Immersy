import Information from '../../shared/information'
import Title from '../../shared/title'

const Base = () => {
  const infos = [
    { text: 'Visite virtuelle en 3D' },
    { text: 'Tags informatifs intégrés à la visite' },
    { text: 'Outil de mesure de l’espace 3D' },
    { text: 'Photos 360°' },
  ]
  return (
    <div className="pt-5 px-5 bg-[#1A2341]">
      <div className="space-y-[50px] mb-5 text-white">
        <Title mainTitle={'La base de'} subTitle={'votre visite'} />
        <Information infos={infos} />
      </div>
    </div>
  )
}
export default Base
