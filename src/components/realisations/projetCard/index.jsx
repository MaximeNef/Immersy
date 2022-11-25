import Link from 'next/link'
import MyImage from '../../shared/myimage'

const ProjetCards = ({ item }) => {
  return (
    <div className="w-fit mx-5 text-white my-6">
      <div className="h-[225px] mx-auto relative">
        <MyImage
          src={item.src}
          layout="fill"
          className="rounded-t-xl md:object-cover"
        />
      </div>
      <div className="bg-[#1A2341] text-white p-6 rounded-b-xl space-y-5">
        <p className="text-xl font-light">{item.title}</p>
        <p className="font-extralight">{item.description}</p>
        <p className="text-[#00C9FF]">
          <Link href={item.href}>{item.btnText} &rarr;</Link>
        </p>
      </div>
    </div>
  )
}

export default ProjetCards
