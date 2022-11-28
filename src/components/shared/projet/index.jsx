import Btn1 from '../btn1'
import Description from '../description'
import Title from '../title'

const Projet = ({ current, blue }) => {
  return (
    <div
      className={`px-5 space-y-[50px] ${
        blue ? 'bg-[#1A2341] text-white' : null
      }`}
    >
      <Title mainTitle={'Votre projet'} subTitle={'notre savoir-faire'} />
      <Description
        text={
          'Parlez-nous de votre projet, que ce soit pour votre entreprise ou pour vos clients, nous avons la solution adaptée.'
        }
      />
      <div className="pt-10 pb-16">
        <Btn1 text={'Contact'} link={'/'} colorBg={`${blue ? null : 'blue'}`} />
      </div>
    </div>
  )
}
export default Projet
