import React from "react"
import Logo from "./Logo"
import Link from "next/link"
import LoginButton from "./LoginButton"

function NavBar() {
  return (
    <div className="flex items-center justify-between py-3">
      <Logo />
      <div className="flex gap-[1rem]">
        <div>
          <Link href="">About</Link>
        </div>
        <div>
          <Link href="">about</Link>
        </div>
        <div>
          <Link href="">about</Link>
        </div>
        <div>
          <Link href="">about</Link>
        </div>
        <div>
          <Link href="">Contact Us</Link>
        </div>
      </div>
      <div>
        <LoginButton />
      </div>
    </div>
  )
}

export default NavBar
