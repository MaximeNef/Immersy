import Description from '../../shared/description'
import MyImage from '../../shared/myimage'
import Title from '../../shared/title'

const Besoins = () => {
  return (
    <div className="md:relative">
      <div className="mx-5 md:mx-40 space-y-[50px] mt-32 mb-14 md:w-[40%] ">
        <Title
          color="black"
          mainTitle="Des services"
          subTitle="adaptés à vos besoins"
        />
        <Description
          color="black"
          text="Chaque collaboration est unique, c’est pourquoi notre objectif est de vous apporter exactement ce dont vous avez besoin. "
        />
        <Title
          color="text-[#00C9FF]"
          mainTitle="Ce qu’offrent nos visites virtuelles"
          fontWeight="font-semibold"
        />
      </div>

      <MyImage
        src={'/assets/VrImmage.png'}
        h={240}
        w={560}
        className="hidden xl:inline-flex absolute top-[15vh] xl:right-[10vw]"
      />

      <div id="pyramid-clip" className="w-full h-12" />
    </div>
  )
}
export default Besoins
