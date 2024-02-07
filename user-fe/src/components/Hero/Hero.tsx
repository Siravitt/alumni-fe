import React from "react"
import { Button } from "../ui/button"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

function Hero() {
  return (
    <div className="justify-center] flex h-[85vh] w-screen items-center">
      <HeroLeft />
      <HeroRight />
    </div>
  )
}

export default Hero
