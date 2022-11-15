import { useState } from 'react'
import Container from '../../shared/container'
import Flex from '../../shared/flex'
import MyImage from '../../shared/myimage'
import Burger from '../burger'

const Header = () => {
  const [pause, setPause] = useState(true)
  const [play, setPlay] = useState(false)
  return (
    <Container className="">
      <Flex content="between" className="">
        <MyImage src={'/assets/immersyicon.svg'} w={60} h={60} />

        <Burger pause={pause} play={play} />
      </Flex>
    </Container>
  )
}
export default Header
