import Title from '../../shared/title'
import Btn1 from '../../shared/btn1'
import RealisationCards from '../../shared/realisationCards'

const Realisation = () => {
  return (
    <div className="mx-5 space-y-10 md:space-y-[90px] md:mx-40 md:mt-[90px]">
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
