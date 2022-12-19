import Flex from '../flex'

const FormSubmitBtn = ({ colorBg, text, disabled }) => {
  return (
    <Flex>
      <button
        type="submit"
        disabled={disabled}
        className={`${disabled ? 'bg-slate-300' : ''} ${
          colorBg == 'blue'
            ? 'bg-[#00C9FF] text-white'
            : 'bg-white text-[#00C9FF]'
        } w-[60%] mx-auto py-3 rounded-3xl text-center text-xl shadow-btn tracking-wider mt-5 mb-12
        
        `}
      >
        {text}
      </button>
    </Flex>
  )
}

export default FormSubmitBtn
