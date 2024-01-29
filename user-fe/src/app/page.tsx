import Header from "@/components/Header/Header"

export default function Home() {
  return (
    <div className="bg-dark-500 text-dark-200">
      <div className="grid h-screen grid-cols-12 grid-rows-12">
        <Header />
        <div className="col-span-10 col-start-2 row-span-4 row-start-3 md:col-span-4 md:col-start-4 md:row-span-6 md:row-start-4">
          <div className="text-2xl">FOR TEXT</div>
        </div>
        <div className="col-span-10 col-start-2 row-span-4 row-start-7 md:col-span-4 md:col-start-8 md:row-span-6 md:row-start-4">
          <div className="text-2xl">FOR IMAGE</div>
        </div>
      </div>
      <div className="h-screen w-screen">Page 2</div>
      <div className="h-screen w-screen">Page 3</div>
    </div>
  )
}
