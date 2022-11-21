const Title = ({ color, fontWeight, mainTitle, subTitle }) => {
  return (
    <div>
      <h2 className={`${color} text-xl ${fontWeight}`}>{mainTitle}</h2>
      <h2 className={`${color} text-xl font-thin`}>{subTitle}</h2>
    </div>
  )
}
export default Title
