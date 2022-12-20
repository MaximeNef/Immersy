import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Information = ({ infos }) => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])
  return (
    <div className="mx-auto space-y-4 md:space-y-0 justify-center  w-full lg:flex lg:flex-wrap md:pl-40 lg:mt-[140px]">
      {infos.map((info, index) => {
        return (
          <Container
            key={index}
            data-aos="fade-up"
            className="lg:w-[50%] lg:mr-auto w-fit"
          >
            <Flex className="my-2  w-fit ">
              <Container className="w-fit mr-4 ">
                <MyImage src={'/assets/immersyicon.svg'} w={23} h={23} />
              </Container>
              <Container>
                <p className="font-light md:w-fit ">{info.text}</p>
              </Container>
            </Flex>
          </Container>
        )
      })}
    </div>
  )
}
export default Information
