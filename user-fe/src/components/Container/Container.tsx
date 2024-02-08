import { PropsWithChildren } from "react"

function Container({ children }: PropsWithChildren) {
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-12">{children}</div>
  )
}

export default Container
