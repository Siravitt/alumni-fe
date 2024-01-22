import Link from "next/link"
import React, { FC, ReactNode } from "react"
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap } from "@mui/material"

interface Props {
  href?: string
  title?: string
  icon?: ReactNode
}

function MobileNavMenu({ href = "#", title = "Something", icon }: Props) {
  return (
    <Link
      href={href}
      className="flex w-full cursor-pointer border-b p-0 py-2 text-center text-lg font-semibold transition-all duration-150 sm:pl-2 md:py-4 md:pl-4"
    >
      <div className="flex gap-3 text-[.7rem] sm:text-[.8rem] md:text-[1rem]">
        {icon || <AccessibleForwardIcon />}
        {title}
      </div>
    </Link>
  )
}

export default MobileNavMenu
