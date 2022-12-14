import Link from 'next/link'
import Container from '../../container'
import MyImage from '../../myimage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const DemandeTarifs = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])
  return (
    <div data-aos="fade-right">
      <Link
        href={{ pathname: '/tarifs/contact', query: { surface: 'custom' } }}
      >
        <Container className="bg-[#1A2341]  my-2 text-white text-center rounded-xl border-[1px] border-white py-5 relative space-y-2 transform transition duration-500 xl:hover:scale-110 hover:shadow-lg xl:hover:shadow-blue-500">
          <Container className="w-fit absolute top-5 left-5">
            <MyImage
              alt="surface icon"
              src="/assets/surface.svg"
              w="50"
              h="50"
            />
          </Container>
          <div>
            <h2 className="text-xl w-full">Demande de tarifs</h2>
            <p className="pl-[90px] text-left min-[420px]:text-center text-[15px] font-light w-[85%]">
              Tarif sur mesure en fonction du nombre de biens.
            </p>
            <div className="text-2xl absolute right-6 bottom-9">&rarr;</div>
          </div>
        </Container>
      </Link>
    </div>
  )
}

export default DemandeTarifs
