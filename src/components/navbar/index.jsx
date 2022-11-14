import { useState } from 'react'
import Flex from '../shared/flex'
import MyImage from '../shared/myimage'
import Burger from './burger'

const Navbar = () => {
  return (
    <div>
      <Flex>
        <MyImage src={'/assets/immersyicon.svg'} w={300} h={300} />
        <Burger pause={'pause'} play={'play'} />
      </Flex>
    </div>
  )
}

export default Navbar
