import Link from "next/link"
import React from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

interface Props {
  title?: string
  href?: string
}

function NavBarMenu({ title = "Something", href = "#" }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-3 p-0 transition-all duration-150 hover:text-blue-500">
      <Link href={href}>{title}</Link>
      <KeyboardArrowDownIcon />
    </div>
  )
}

export default NavBarMenu
