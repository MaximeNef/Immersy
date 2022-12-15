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
    <div className=" sm:flex sm:flex-row sm:flex-wrap">
      {infos.map((info, index) => {
        return (
          <div key={index} data-aos="fade-up" className="sm:w-1/2">
            <Flex className="my-2">
              <Container className="w-fit mr-4">
                <MyImage src={'/assets/immersyicon.svg'} w={23} h={23} />
              </Container>
              <Container>
                <p className="font-light">{info.text}</p>
              </Container>
            </Flex>
          </div>
        )
      })}
    </div>
  )
}
export default Information
