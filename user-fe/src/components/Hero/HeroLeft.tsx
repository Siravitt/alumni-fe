import React from "react"
import { Button } from "../ui/button"

function HeroLeft() {
  return (
    <div className="col-span-10 col-start-2 row-span-4 row-start-3 md:col-span-4 md:col-start-3 md:row-span-6 md:row-start-4 lg:col-span-3 lg:col-start-3">
      <div className="flex h-full w-full flex-col justify-evenly">
        <div className="text-3xl font-semibold lg:text-[3rem]">
          Software Park
        </div>
        <div className="text-3xl font-semibold text-blue-400 lg:text-[3rem]">
          Code Camp.
        </div>
        <div className="text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          molestias!
        </div>
        <div className="flex gap-4">
          <Button className="bg-blue-400 hover:bg-blue-400/80 md:px-7 md:py-6 md:text-lg">
            Button1
          </Button>
          <Button
            variant="outline"
            className="border-blue-400 bg-transparent text-blue-400 hover:bg-blue-400/15 hover:text-blue-400 md:px-7 md:py-6 md:text-lg"
          >
            Button2
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroLeft
