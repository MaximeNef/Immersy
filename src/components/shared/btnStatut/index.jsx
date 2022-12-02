const BtnStatut = ({ text, handleClick, selected }) => {
  return (
    <div
      className={`${
        selected == text
          ? 'bg-[#1A2341] text-white shadow-btn'
          : 'bg-white text-[#1A2341] border-[1px] border-[#1A2341]'
      } mx-auto py-9 rounded-[10px] text-center text-xl  tracking-wider`}
      onClick={() => {
        handleClick({ text })
      }}
    >
      {text}
    </div>
  )
}
export default BtnStatut
