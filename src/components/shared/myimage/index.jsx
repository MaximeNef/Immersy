import Image from 'next/image'
import Container from '../container'

const myLoader = ({ src, width, quality }) => {
  console.log(src, 'src')
  return `${src}`
}

const MyImage = ({
  src,
  h,
  w,
  className,
  objectFit,
  layout,
  sizes,
  priority,
}) => {
  return (
    <Container className="">
      <Image
        loader={myLoader}
        src={src}
        alt="Picture of the author"
        width={w}
        height={h}
        unoptimized={true}
        className={className}
        objectFit={objectFit}
        layout={layout}
        priority={priority ? true : false}
        placeholder="blur"
        blurDataURL="/images/path-to-blur-image.jpg"
        sizes={sizes}
        quality={100}
      />
    </Container>
  )
}
export default MyImage
