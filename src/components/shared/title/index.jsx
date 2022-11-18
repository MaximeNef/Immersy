const Title = ({ color, mainTitle, subTitle }) => {
  return (
    <div>
      <h2 className={`${color} text-xl font`}>{mainTitle}</h2>
      <h2 className={`${color} text-xl font-extralight`}>{subTitle}</h2>
    </div>
  )
}
export default Title
