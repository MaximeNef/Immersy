import { useEffect } from 'react'
import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AvantageItems = ({ avantages, color }) => {
  useEffect(() => {
    AOS.init({ offset: 10, once: true })
  }, [])
  return (
    <div className="md:flex md:justify-between ">
      {avantages.map((avantage, i) => {
        return (
          <div data-aos="fade-right" key={i}>
            <Flex className="my-[40px] md:flex-col md:items-center md:text-center md:w-[200px] lg:w-[280px] 2xl:w-[350px]">
              <Container className="w-fit mr-[25px]">
                <MyImage src={avantage.img} w={50} h={50} />
              </Container>
              <Container className={`${color}`}>
                <p className="mb-1 font-medium tracking-standard text-[20px] ">
                  {avantage.title}
                </p>
                <p className=" font-light tracking-standard text-[15px] leading-[22px] ">
                  {avantage.subtitle}
                </p>
              </Container>
            </Flex>
          </div>
        )
      })}
    </div>
  )
}
export default AvantageItems
