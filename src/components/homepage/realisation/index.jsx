import Title from '../../shared/title'
import Btn1 from '../../shared/btn1'
import RealisationCards from '../../shared/realisationCards'

const Realisation = () => {
  return (
    <div className="mx-5 space-y-10">
      <Title
        mainTitle="Votre réalisation"
        subTitle="ce que nous faisons de mieux"
      />
      <RealisationCards />
      <Btn1 link="/" text="Nos réalisations" colorBg="blue" />
    </div>
  )
}

export default Realisation
