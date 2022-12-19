import Information from '../../shared/information'
import Title from '../../shared/title'

const Partage = () => {
  const infos = [
    { text: 'Intégration de la visite à votre site web' },
    { text: 'Partage de la visite sur les réseaux, par mail, etc' },
    { text: 'Visite disponible sur mobile et pc' },
  ]
  return (
    <div className="md:hidden">
      <div id="blue-wave" className="w-full h-20 mt-[-1px]" />
      <div className="pt-5 px-5 md:px-40">
        <div className="space-y-[50px] mb-5">
          <Title
            mainTitle={'Partage & intégration de'}
            subTitle={'votre visite'}
          />
          <Information infos={infos} />
        </div>
      </div>
      <div id="blue-wave" className="w-full h-20 rotate-180" />
    </div>
  )
}
export default Partage
