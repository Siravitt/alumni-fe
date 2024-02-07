import React from "react"
import { Button } from "../ui/button"

function HeroLeft() {
  return (
    <div className="ml-[5rem] flex w-full flex-col justify-center">
      <div>
        <h1 className="text-[3rem] font-semibold">Software Park</h1>
        <h1 className="-mt-[1.5rem] text-[3rem] font-semibold text-blue-400">
          Code Camp.
        </h1>
      </div>
      <p className="pl-2 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        molestias!
      </p>
      <div className="ml-2 mt-5 flex gap-3">
        <Button className="bg-blue-400 px-7 py-6 text-lg hover:bg-blue-400/80">
          Button1
        </Button>
        <Button
          variant="outline"
          className="border-blue-400 bg-transparent px-7 py-6 text-lg text-blue-400 hover:bg-blue-400/15 hover:text-blue-400 "
        >
          Button2
        </Button>
      </div>
    </div>
  )
}

export default HeroLeft
