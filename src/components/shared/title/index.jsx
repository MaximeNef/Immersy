const Title = (props) => {
  return (
    <div>
      <h2 className={`${props.color} text-xl font`}>{props.mainTitle}</h2>
      <h2 className={`${props.color} text-xl font-extralight`}>
        {props.subTitle}
      </h2>
    </div>
  )
}
export default Title
