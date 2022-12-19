import Link from 'next/link'
import Flex from '../../../shared/flex'

const MenuDesktop = ({ links, current }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.href} className="my-auto ">
            <p
              className={`text-left font-extralight tracking-   ${
                index == 4
                  ? ' border-[1px] rounded-[50px] border-black px-2 py-1 shadow-md ml-[75vh] 2xl:ml-[100vh] font-bold '
                  : 'mx-5'
              } ${
                current == link.page
                  ? 'underline underline-offset-8 under text-[#1A2341]  text-[17px]'
                  : 'text-slate-600  text-[16px] '
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
