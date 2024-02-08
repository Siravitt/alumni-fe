import Container from "@/components/Container/Container"
import Header from "@/components/Header/Header"
import HeroLeft from "@/components/Hero/HeroLeft"
import ImageContainer from "@/components/ImageContainer/ImageContainer"

export default function Home() {
  return (
    <div className="bg-dark-500 text-dark-200">
      <Container>
        <Header />
        <HeroLeft />
        <div className="col-span-10 col-start-2 row-span-4 row-start-8 md:col-span-4 md:col-start-8 md:row-span-6 md:row-start-4 lg:col-span-3 lg:col-start-8">
          <ImageContainer src="/test-image.jpg" alt="test-image" />
        </div>
      </Container>
      <Container>
        <div className="col-span-10 col-start-2 row-span-4 row-start-3 md:col-span-4 md:col-start-3 md:row-span-6 md:row-start-4 lg:col-span-3 lg:col-start-3">
          <ImageContainer src="/test-image.jpg" alt="test-image" />
        </div>
        <div className="col-span-10 col-start-2 row-span-4 row-start-8 bg-dark-400 md:col-span-4 md:col-start-8 md:row-span-6 md:row-start-4 lg:col-span-3 lg:col-start-8">
          <div className="text-2xl">FOR TEXT</div>
        </div>
      </Container>
      <Container>
        <div className="col-span-10 col-start-2 row-span-4 row-start-3 bg-dark-400 md:col-span-4 md:col-start-3 md:row-span-6 md:row-start-4 lg:col-span-3 lg:col-start-3">
          <div className="text-2xl">FOR TEXT</div>
        </div>
        <div className="col-span-10 col-start-2 row-span-4 row-start-8 md:col-span-4 md:col-start-8 md:row-span-6 md:row-start-4 lg:col-span-3 lg:col-start-8">
          <ImageContainer src="/test-image.jpg" alt="test-image" />
        </div>
      </Container>
    </div>
  )
}
