const CarteContact = ({ text, handleClick, selected, arrow }) => {
  return (
    <div
      className={`${
        selected == text
          ? 'bg-[#1A2341] text-white shadow-btn'
          : 'bg-white text-[#1A2341] border-[1px] border-[#1A2341]'
      } mx-auto py-9 rounded-[10px] text-center text-xl  tracking-wider relative`}
      onClick={() => {
        handleClick({ text })
      }}
    >
      {text}
      {arrow ? (
        <div className="text-3xl absolute right-6 top-8">&rarr;</div>
      ) : null}
    </div>
  )
}
export default CarteContact
