import Description from '../../shared/description'
import Title from '../../shared/title'

const Besoins = () => {
  return (
    <div>
      <div className="mx-5 space-y-[50px] mt-32 mb-14">
        <Title
          color={'black'}
          mainTitle={'Des services'}
          subTitle={'adaptés à vos besoins'}
        />
        <Description
          color="black"
          text={
            'Chaque collaboration est unique, c’est pourquoi notre objectif est de vous apporter exactement ce dont vous avez besoin. '
          }
        />
        <Title
          color="text-[#00C9FF]"
          mainTitle={'Ce qu’offrent nos visites virtuelles'}
          fontWeight={'font-semibold'}
        />
      </div>
      <div id="pyramid-clip" className="w-full h-12" />
    </div>
  )
}
export default Besoins
