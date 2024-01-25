"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChangeEvent, useState } from "react"
import Link from "next/link"

type Input = {
  emailPhone: string
  password: string
}

export default function LoginDialog() {
  const [input, setInput] = useState<Input>({
    emailPhone: "",
    password: "",
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    console.log(input)
  }

  return (
    <form>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign in</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid-cols-4 items-center">
              <Label htmlFor="email-phone" className="text-right text-gray-400">
                Email or phone number
              </Label>
              <Input
                id="email-phone"
                name="emailPhone"
                className="col-span-3"
                onChange={event => {
                  onChange(event)
                }}
              />
            </div>
            <div className="grid-cols-4 items-center">
              <Label htmlFor="password" className="text-right text-gray-400">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                className="col-span-3"
                onChange={event => {
                  onChange(event)
                }}
              />
            </div>
            <Button
              // disabled={!emailPhone || !password}
              className="grid-col-4"
              type="submit"
              onClick={onSubmit}
            >
              Sign in
            </Button>
            <div className="grid-col-12 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me">Remember me</Label>
              </div>
              <Link className="text-sm" href="">
                Need help?
              </Link>
            </div>
            <div className=" grid-col-12 mt-3 flex items-center gap-2">
              <Label className="text-gray-400">Forget password?</Label>
              <Link className="text-sm" href="">
                Forget password
              </Link>
            </div>
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}
