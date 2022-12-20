const CarteContact = ({ text, handleClick, selected, arrow }) => {
  return (
    <div
      className={`${
        selected == text
          ? 'bg-[#1A2341] text-white shadow-btn'
          : 'bg-white text-[#1A2341] border-[1px] border-[#1A2341]'
      } mx-auto 2xl:mx-40 py-9 rounded-[10px] text-center text-xl  tracking-wider relative transform transition duration-500 md:hover:scale-110 hover:shadow-lg md:hover:bg-[#1A2341] md:hover:text-white cursor-pointer  `}
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
