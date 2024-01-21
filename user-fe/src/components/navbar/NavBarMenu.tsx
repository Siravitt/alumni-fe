import Link from "next/link"
import React from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

function NavBarMenu({ title = "something", href = "" }) {
  return (
    <div className="flex items-center gap-3">
      <Link href={href}>{title}</Link>
      <KeyboardArrowDownIcon />
    </div>
  )
}

export default NavBarMenu
