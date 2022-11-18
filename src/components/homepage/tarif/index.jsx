import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import PricingCards from '../../shared/pricingCard'
import Title from '../../shared/title'

const Tarif = () => {
  return (
    <Container className="mt-14">
      <div id="pyramid-clip" className="w-full h-14" />
      <Container className="bg-[#1A2341] py-5">
        <div className="mx-5 space-y-[35px] ">
          <Title
            mainTitle="Nos tarifs"
            subTitle="un avantage sur-mesure"
            color="text-white"
          />
          <PricingCards />
          <Btn1 link="/" colorBg={'white'} text="En savoir plus" />
        </div>
      </Container>
      <div id="blue-wave" className="w-full h-20" />
    </Container>
  )
}
export default Tarif
