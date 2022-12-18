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
    <div className="mx-auto space-y-4 md:space-y-0 justify-center w-full md:flex md:flex-wrap md:mx-40 md:mt-[140px]">
      {infos.map((info, index) => {
        return (
          <Container
            key={index}
            data-aos="fade-up"
            className="sm:w-[50%] md:mx-auto w-fit"
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
