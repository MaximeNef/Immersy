const Description = (props) => {
  return (
    <div>
      <p className={`${props.color} text-left font-light leading-6`}>
        {props.text}
      </p>
    </div>
  )
}
export default Description
