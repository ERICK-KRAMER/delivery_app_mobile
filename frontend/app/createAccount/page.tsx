'use client';

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "../components/input/input";
import { Button } from "../components/button/button-login";
import { useForm } from "react-hook-form";
import { Login } from "../api/login";

export default function Page() {
  const { register, handleSubmit } = useForm();

  const signUp = async (data: any) => {
    console.log(data);
    const login = new Login();
    const response = await login.SignUp(data);
    console.log(response.message)
  }


  return (
    <main className="h-screen grid place-items-center relative">
      <Link href={"/login"} className="absolute top-5 left-5 p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer"><ChevronLeft className="text-red-300" /></Link>
      <form className="flex justify-center items-center flex-col w-3/4 gap-4" onSubmit={handleSubmit(signUp)}>
        <h1 className="text-3xl font-semibold my-10">Create Account</h1>
        <Input placeholder="Name" {...register('name')} />
        <Input placeholder="Email" {...register('email')} />
        <Input placeholder="Password" {...register('password')} />
        <span className="w-full flex flex-col items-center gap-1">
          <Button>Create</Button>
        </span>
      </form>
    </main>
  )
}