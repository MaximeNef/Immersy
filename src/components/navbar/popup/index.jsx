import Link from 'next/link'
import Flex from '../../shared/flex'

const Popup = ({ links }) => {
  return (
    <Flex className="bg-white justify-center flex-col pl-16 space-y-16 mx-aut h-[100vh]">
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.href}>
            <p className="text-left text-3xl font-extralight tracking-widest">
              {link.page}
            </p>
          </Link>
        )
      })}
    </Flex>
  )
}

export default Popup
