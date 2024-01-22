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
import { useState } from "react"
import Link from "next/link"

export default function LoginButton() {
  const [emailPhone, setEmailPhone] = useState<string>()
  const [password, setPassword] = useState<string>()

  const onChangeEmailPhone = (value: string) => {
    if (value !== null) {
      setEmailPhone(value)
    }
  }
  const onChangePassword = (value: string) => {
    if (value !== null) {
      setPassword(value)
    }
  }
  const onSubmit = () => {
    console.log(emailPhone, "email", password, "password")
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
                className="col-span-3"
                onChange={event => {
                  onChangeEmailPhone(event.target.value)
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
                className="col-span-3"
                onChange={event => {
                  onChangePassword(event.target.value)
                }}
              />
            </div>
            <Button
              disabled={!emailPhone || !password}
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
            <div className="grid-col-12">
              <label htmlFor="" className="text-sm text-gray-400">
                This page is protected by Google reCAPTCHA <br />
                to ensure you are not a bot.{" "}
                <Link className="text-black" href="">
                  Learn more.
                </Link>
              </label>
            </div>
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}
