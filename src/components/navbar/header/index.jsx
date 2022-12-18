import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Container from '../../shared/container'
import Flex from '../../shared/flex'
import MyImage from '../../shared/myimage'
import Burger from '../burger'
import Popup from '../popup'
import MenuDesktop from './MenuDesktop'

const Header = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const variants = {
    open: {
      top: 0,
    },
    closed: {
      top: '-100vh',
    },
  }

  return (
    <>
      <Container className="z-[99] fixed backdrop-blur bg-white md:bg-opacity-60 bg-opacity-40 bg-clip-padding py-1">
        <Flex className="justify-between mt-[0px] ml-[40px] md:mr-[40px] md:items-center">
          <Container className="my-auto md:w-fit">
            <Link href="/">
              <MyImage src={'/assets/immersyicon.svg'} w={40} h={40} />
            </Link>
          </Container>
          <div className="inline-flex md:hidden">
            <Burger handleClick={handleClick} />
          </div>
          <div className="md:inline-flex hidden">
            <MenuDesktop links={links} />
          </div>
        </Flex>
      </Container>

      <motion.div
        initial={false}
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className="min-h-screen fixed w-full z-[98]"
        transition={{
          duration: 0.5,
        }}
      >
        <Popup links={links} />
      </motion.div>
    </>
  )
}
export default Header
