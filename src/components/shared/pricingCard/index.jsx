import Container from '../container'
import MyImage from '../myimage'

const surfaces = [
  {
    type: 'Surface standard',
    surface: '> 150',
    price: '1,99€',
  },
  {
    type: 'Surface moyenne',
    surface: '150 - 300',
    price: '1,99€ - 1,69€',
  },
  {
    type: 'Surface standard',
    surface: '< 300',
    price: 'Apd 1,69€',
  },
]

const PricingCards = () => {
  return (
    <Container className="w-full h-[800px] bg-gray-400">
      {surfaces.map((surface, index) => {
        return (
          <Container
            key={index}
            className="bg-[#1A2341] mx-auto w-[90%] my-6 text-white text-center rounded-xl border-[1px] border-white py-5 relative space-y-2"
          >
            <Container className="w-fit absolute top-5 left-5">
              <MyImage
                alt="surface icon"
                src="/assets/surface.svg"
                w="50"
                h="50"
              />
            </Container>
            <Container>
              <h2 className="text-xl w-full">{surface.type}</h2>
            </Container>
            <p className=" text-[20px] w-full font-light tracking-standard">
              {surface.surface} M&#178;
            </p>
            <p className=" text-[15px] w-full font-light">
              {surface.price}/M&#178;
            </p>
          </Container>
        )
      })}
    </Container>
  )
}

export default PricingCards
