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
    <Container className="w-full xl:flex xl:flex-row md:justify-center ">
      {surfaces.map((surface, index) => {
        return (
          <div data-aos="fade-right" key={index} className="md:mx-10">
            <Link
              href={{
                pathname: 'tarifs/contact',
                query: { surface: surface.query },
              }}
            >
              <Container
                className={`bg-[#1A2341]  my-2 text-white text-center rounded-xl border-[1px] border-white md:border-white/0 py-5 relative space-y-2 xl:w-[350px] transform transition duration-500 md:hover:scale-110 hover:shadow-lg md:hover:shadow-blue-500   ${
                  index == 1
                    ? 'md:scale-110 md:shadow-btn md:shadow-white/20 md:hover:scale-125 md:hover:border-white  '
                    : ' md:shadow-btn md:shadow-white/20 md:hover:border-white '
                }   `}
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
                  <p className="hidden md:inline-flex  mx-5 my-10 font-extralight text-[14px] leading-7">
                    {
                      '   Cet formule est parfaite pour les établissements de petite et moyenne taille, tels que les restaurants, les cafés, les bars, les hôtels, les épiceries, etc'
                    }
                  </p>

                  <Flex className="my-2">
                    <p className=" text-[20px] w-full font-light tracking-standard">
                      {surface.surface} M&#178;
                    </p>
                    <div className="text-2xl absolute right-6 md:hidden inline-flex">
                      &rarr;
                    </div>
                  </Flex>

                  <div className=" text-[15px] w-full font-light md:mb-10 ">
                    {surface.price}/M&#178;
                  </div>
                </Container>
                <div className="hidden md:inline-flex bg-white  mx-5 rounded-[10px] px-auto py-2 mt-20 text-black">
                  <p className=" mx-auto"> Découvrir </p>
                </div>
              </Container>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export default PricingCards
