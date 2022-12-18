import Link from 'next/link'
import Flex from '../../../shared/flex'

const MenuDesktop = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.href} className="my-auto ">
            <p
              className={`text-left text-[17px] font-extralight tracking- text-slate-600   ${
                index == 4
                  ? ' border-[1px] rounded-[50px] border-black px-2 py-1 shadow-md ml-[75vh] 2xl:ml-[100vh]  '
                  : 'mx-5'
              }`}
            >
              {link.page}
            </p>
          </Link>
        )
      })}
    </>
  )
}
export default MenuDesktop
