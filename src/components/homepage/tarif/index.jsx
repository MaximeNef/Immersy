import Btn1 from '../../shared/btn1'
import Container from '../../shared/container'
import PricingCards from '../../shared/pricingCard'
import Title from '../../shared/title'

const Tarif = () => {
  return (
    <Container className="mt-14">
      <div id="pyramid-clip" className="w-full h-14 mb-[-1px]" />
      <Container className="bg-[#1A2341] py-5 md:pt-[90px] md:pb-[90px]">
        <div className="mx-5 space-y-[35px] md:mx-40 md:space-y-[90px] ">
          <Title
            mainTitle="Nos tarifs"
            subTitle="un avantage sur-mesure"
            color="text-white"
          />
          <PricingCards />
          <Btn1 link="/tarifs" colorBg={'white'} text="En savoir plus" />
        </div>
      </Container>
      <div id="blue-wave" className="w-full h-20" />
    </Container>
  )
}
export default Tarif
