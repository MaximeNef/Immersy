import { useEffect } from 'react'
import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AvantageItems = ({ avantages, color, current }) => {
  useEffect(() => {
    AOS.init({ offset: 10, once: true })
  }, [])
  return (
    <div className="md:flex md:justify-center  md:flex-wrap md:space-x-0 ">
      {avantages.map((avantage, i) => {
        return (
          <div data-aos="fade-right" key={i} className="md:px-10">
            <Flex
              className={`my-[40px] md:flex-col md:items-center md:text-center md:w-[200px] lg:w-[280px] 2xl:w-[350px] ${
                current == 'Nos services'
                  ? ''
                  : i == 1
                  ? ' min-[1400px]:scale-150 min-[1400px]:px-10 '
                  : ''
              } `}
            >
              <Container className="w-fit  mr-[25px] md:mr-0 md:mb-3">
                <MyImage src={avantage.img} w={50} h={50} />
              </Container>
              <Container className={`${color}`}>
                <p className="mb-1 font-medium tracking-standard text-[20px] ">
                  {avantage.title}
                </p>
                <p className=" font-light tracking-standard text-[15px] leading-[22px] md:px-5 ">
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
