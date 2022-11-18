import Container from '../container'
import Flex from '../flex'
import MyImage from '../myimage'

const Information = ({ infos }) => {
  return (
    <Container>
      {infos.map((info, index) => {
        return (
          <Flex key={index} className="my-2">
            <Container className="w-fit mr-4">
              <MyImage src={'/assets/immersyicon.svg'} w={23} h={23} />
            </Container>
            <Container>
              <p className="font-light">{info.text}</p>
            </Container>
          </Flex>
        )
      })}
    </Container>
  )
}
export default Information
