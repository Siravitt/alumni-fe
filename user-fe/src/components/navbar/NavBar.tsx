import React from "react"
import Logo from "./Logo"
import Link from "next/link"
import LoginButton from "./LoginButton"
import NavBarMenu from "./NavBarMenu"
import MenuIcon from "@mui/icons-material/Menu"
import MobileSideBar from "./MobileSideBar"
import ThemeButton from "./ThemeButton"

function NavBar() {
  return (
    <div className="flex items-center justify-between py-3 sm:px-[1rem] md:px-[2rem] lg:px-[3rem] xl:px-[3rem] 2xl:px-[10rem]">
      <Logo />
      <div className="flex gap-[2rem]">
        <div className="hidden gap-[2rem] sm:hidden md:hidden lg:hidden xl:flex 2xl:flex">
          <NavBarMenu title="About" />
          <NavBarMenu />
          <NavBarMenu />
          <NavBarMenu title="Contact Us" />
        </div>
        <div className="flex gap-[1rem]">
          <div className="hidden gap-3 sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
            <LoginButton />
            <ThemeButton />
          </div>
          <div className="sm:block md:block xl:hidden 2xl:hidden">
            <MobileSideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
