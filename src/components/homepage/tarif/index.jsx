import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import Description from '../../shared/description'
import PricingCards from '../../shared/pricingCard'
import Title from '../../shared/title'

const Tarif = () => {
  return (
    <Container>
      <div id="blue-clip" className="w-full h-20" />
      <Container className="bg-[#1A2341] py-5">
        <div className="mx-5 space-y-[35px] ">
          <Title
            mainTitle="Les avantages"
            subTitle="d’une visite virtuelle"
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
