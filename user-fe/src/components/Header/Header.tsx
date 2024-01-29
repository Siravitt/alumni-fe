import HeaderLogo from "../HeaderLogo/HeaderLogo"
import HeaderMenu from "../HeaderMenu/HeaderMenu"

function Header() {
  return (
    <div className="col-span-12 h-full px-3">
      <div className="flex h-full items-center justify-between px-4 md:px-8">
        <HeaderLogo />
        <HeaderMenu />
      </div>
    </div>
  )
}

export default Header
