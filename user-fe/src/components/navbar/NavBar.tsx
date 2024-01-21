import React from "react"
import Logo from "./Logo"
import Link from "next/link"
import LoginButton from "./LoginButton"
import NavBarMenu from "./NavBarMenu"
import MenuIcon from "@mui/icons-material/Menu"

function NavBar() {
  return (
    <div className="flex items-center justify-between py-3 sm:px-[1rem] md:px-[2rem] lg:px-[3rem] xl:px-[3rem] 2xl:px-[15rem]">
      <Logo />
      <div className="flex gap-[2rem]">
        <div className="gap-[2rem] sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <NavBarMenu title="About" />
          <NavBarMenu />
          <NavBarMenu />
          <NavBarMenu title="Contact Us" />
        </div>
        <div className="flex gap-[1rem]">
          <div className="sm:hidden md:block lg:block xl:block 2xl:block">
            <LoginButton />
          </div>
          <div className="sm:block md:block lg:hidden xl:hidden 2xl:hidden">
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar