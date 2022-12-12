import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Title = ({ color, fontWeight, mainTitle, subTitle }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div>
      <h2 data-aos="fade-right" className={`${color} text-xl ${fontWeight}`}>
        {mainTitle}
      </h2>
      <h2 className={`${color} text-xl font-thin`}>{subTitle}</h2>
    </div>
  )
}
export default Title
