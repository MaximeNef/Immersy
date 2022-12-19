import Link from 'next/link'
import Container from '../container'

const Btn1 = ({ link, colorBg, text }) => {
  return (
    <Container
      className={`${
        colorBg == 'blue'
          ? 'bg-[#00C9FF] text-white'
          : 'bg-white text-[#00C9FF]'
      } w-[60%] min-[500px]:w-[230px] mx-auto  py-3 rounded-3xl text-center text-xl shadow-btn tracking-wider`}
    >
      <Link href={link}>{text}</Link>
    </Container>
  )
}
export default Btn1
