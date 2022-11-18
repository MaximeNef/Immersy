const Description = ({ color, text }) => {
  return (
    <div>
      <p className={`${color} text-left font-light leading-6`}>{text}</p>
    </div>
  )
}
export default Description
