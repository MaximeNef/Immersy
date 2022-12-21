import Link from 'next/link'
import MyImage from '../../shared/myimage'

const ProjetCards = ({ item }) => {
  return (
    <div className="w-fit mx-5 text-white my-6 lg:w-1/2 lg:hover:scale-110 transform transition duration-500  lg:hover:shadow-lg">
      <Link href={item.href}>
        <div className="h-[225px] mx-auto relative">
          <MyImage
            src={item.src}
            layout="fill"
            className="rounded-t-xl md:object-cover"
          />
        </div>
        <div className="bg-[#1A2341] text-white p-6 rounded-b-xl space-y-5 md:h-[250px] xl:h-[200px] md:relative ">
          <p className="text-xl font-light">{item.title}</p>
          <p className="font-extraligh">{item.description}</p>
          <p className="text-[#00C9FF] md:absolute md:bottom-5 ">
            {item.btnText} &rarr;
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ProjetCards
