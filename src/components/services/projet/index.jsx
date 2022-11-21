import Btn1 from '../../shared/btn1'
import Description from '../../shared/description'
import Title from '../../shared/title'

const Projet = () => {
  return (
    <div className="px-5 space-y-[50px] bg-[#1A2341] text-white">
      <Title mainTitle={'Votre projet'} subTitle={'notre savoir-faire'} />
      <Description
        text={
          'Parlez-nous de votre projet, que ce soit pour votre entreprise ou pour vos clients, nous avons la solution adaptée.'
        }
      />
      <div className="pt-10 pb-16">
        <Btn1 text={'Contact'} link={'/'} />
      </div>
    </div>
  )
}
export default Projet
