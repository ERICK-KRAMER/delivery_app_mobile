import { ChevronLeft } from "lucide-react";
import { Input } from "../components/input/input";
import { Button } from "../components/button/button-login";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen grid place-items-center relative">
      <Link href={"/"} className="absolute top-5 left-5 p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer"><ChevronLeft className="text-red-300" /></Link>
      <form className="flex justify-center items-center flex-col w-3/4 gap-4">
        <h1 className="text-3xl font-semibold my-10">Log in</h1>
        <Input placeholder="Email" />
        <span className="w-full flex flex-col items-end">
          <Input placeholder="Password" />
          <span className="text-blue-400 hover:underline cursor-pointer">Forget?</span>
        </span>
        <span className="w-full flex flex-col items-center gap-1">
          <Button>Submit</Button>
          <Link href={'/createAccount'} className="text-blue-400 hover:underline cursor-pointer">Do not have an account ? click here!</Link>
        </span>
      </form>
    </main>
  )
}
