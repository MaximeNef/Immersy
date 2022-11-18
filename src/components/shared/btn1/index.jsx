import Link from 'next/link'
import Container from '../container'

const Btn1 = ({ link, colorBg, text }) => {
  return (
    <div>
      <Link href={link}>
        <Container
          className={`${
            colorBg == 'blue'
              ? 'bg-[#00C9FF] text-white'
              : 'bg-white text-[#00C9FF]'
          } w-[60%] mx-auto py-4 rounded-3xl text-center text-xl shadow-btn tracking-wider`}
        >
          {text}
        </Container>
      </Link>
    </div>
  )
}
export default Btn1
