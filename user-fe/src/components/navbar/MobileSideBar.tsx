import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MenuIcon from "@mui/icons-material/Menu"

import React from "react"
import NavBarMenu from "./NavBarMenu"
import MobileNavMenu from "./MobileNavMenu"

function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon fontSize="large" />
      </SheetTrigger>
      <SheetContent className="w-[60vw] sm:w-[50vw] md:w-[40vw]">
        <SheetHeader>
          <SheetTitle className="mb-3 flex justify-center">Menu</SheetTitle>
          <SheetDescription className="flex flex-col items-center gap-3">
            <MobileNavMenu title="About" />
            <MobileNavMenu title="Products" />
            <MobileNavMenu title="Learn More" />
            <MobileNavMenu title="Contact Us" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
