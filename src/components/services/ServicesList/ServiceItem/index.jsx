import Container from '../../../shared/container'
import Flex from '../../../shared/flex'
import MyImage from '../../../shared/myimage'
import Title from '../../../shared/title'

const ServiceItem = ({ infos, title, sub }) => {
  return (
    <div className="space-y-[50px] mb-5 w-fit   ">
      <Title color={'text-white'} mainTitle={title} subTitle={sub} />

      {infos.map((info, index) => {
        return (
          <Container key={index} data-aos="fade-up" className="w-[90%] ">
            <Flex className="my-2  w-fit ">
              <Container className="w-fit mr-4 ">
                <MyImage src={'/assets/immersyicon.svg'} w={23} h={23} />
              </Container>
              <Container>
                <p className="font-light md:w-fit text-white ">{info.text}</p>
              </Container>
            </Flex>
          </Container>
        )
      })}
    </div>
  )
}
export default ServiceItem
