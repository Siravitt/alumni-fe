import Image from "next/image"

function ImageContainer({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full">
      <Image src={src} fill={true} alt={alt} />
    </div>
  )
}

export default ImageContainer
