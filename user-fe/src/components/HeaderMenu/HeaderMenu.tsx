"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Switch } from "../ui/switch"
import LoginDialog from "../LoginDialog/LoginDialog"

function HeaderMenu() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="hidden items-center gap-8 md:flex">
        <Link href="/">Menu 1..</Link>
        <Link href="/">Menu 2..</Link>
        <Link href="/">Menu 3..</Link>
        <Link href="/">Menu 4..</Link>
        <LoginDialog />
        <Switch onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
      </div>
      <div className="md:hidden">
        {/* TODO: conditional rendering menu image without warning */}
      </div>
    </>
  )
}

export default HeaderMenu
