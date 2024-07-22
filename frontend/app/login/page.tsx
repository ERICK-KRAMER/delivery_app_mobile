'use client';

import { ChevronLeft } from "lucide-react";
import { Input } from "../components/input/input";
import { Button } from "../components/button/button-login";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from "@/app/api/login";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};

export default function Page() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const login = new Login();
    const response = await login.SignIn(data);
    console.log(response);
  };

  return (
    <main className="h-screen grid place-items-center relative">
      <Link href={"/"} className="absolute top-5 left-5 p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer">
        <ChevronLeft className="text-red-300" />
      </Link>
      <form className="flex justify-center items-center flex-col w-3/4 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-semibold my-10">Log in</h1>
        <Input placeholder="Email" {...register('email')} />
        <span className="w-full flex flex-col items-end">
          <Input placeholder="Password" {...register('password')} />
          <span className="text-blue-400 hover:underline cursor-pointer">Forget?</span>
        </span>
        <span className="w-full flex flex-col items-center gap-1">
          <Button type="submit">Submit</Button>
          <Link href={'/createAccount'} className="text-blue-400 hover:underline cursor-pointer">Do not have an account? Click here!</Link>
        </span>
      </form>
    </main>
  );
}
