import Link from 'next/link'
import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const surfaces = [
  {
    type: 'Surface standard',
    surface: '> 150',
    price: '1,99€',
    query: 'standard',
  },
  {
    type: 'Surface moyenne',
    surface: '150 - 300',
    price: '1,99€ - 1,69€',
    query: 'moyenne',
  },
  {
    type: 'Surface grande',
    surface: '< 300',
    price: 'Apd 1,69€',
    query: 'grande',
  },
]

const PricingCards = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <Container className="w-full xl:flex xl:flex-row xl:justify-between">
      {surfaces.map((surface, index) => {
        return (
          <div data-aos="fade-right" key={index}>
            <Link
              href={{
                pathname: 'tarifs/contact',
                query: { surface: surface.query },
              }}
            >
              <Container className="bg-[#1A2341]  my-2 text-white text-center rounded-xl border-[1px] border-white py-5 relative space-y-2 xl:w-[350px] transform transition duration-500 md:hover:scale-110 hover:shadow-lg md:hover:shadow-blue-500">
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
                <Flex>
                  <p className=" text-[20px] w-full font-light tracking-standard">
                    {surface.surface} M&#178;
                  </p>
                  <div className="text-2xl absolute right-6">&rarr;</div>
                </Flex>
                <p className=" text-[15px] w-full font-light">
                  {surface.price}/M&#178;
                </p>
              </Container>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default PricingCards
