'use client';

import Link from "next/link";
import { ChevronLeft, TimerIcon, User } from "lucide-react";
import { CartItem } from "./cart-item";
import { Button } from "../components/button/button-login";
import { Input } from "../components/input/input";
import { useForm } from "react-hook-form";
import { GetLocation, ViaCepResponse } from "../api/viaCep/viacep";
import { useState } from "react";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<ViaCepResponse>();

  const handleClick = async (formData: any) => {
    try {
      const response = await GetLocation(formData.cep);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch location data:", error);
    }
  };

  return (
    <main className="relative p-8 py-8">
      <div className="mb-16">
        <Link href={"/"} className="absolute top-5 left-5 p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer">
          <ChevronLeft className="text-red-300" />
        </Link>
      </div>

      <div className="flex gap-2">
        <User className="text-green-600" />
        <p className="text-xl">Delivery at Nome do usuario</p>
      </div>

      <div className="flex gap-2 my-4">
        <TimerIcon className="text-green-600" />
        <p className="text-xl">Delivery in 40 min</p>
      </div>

      <CartItem name={"Pizza portuguesa"} price={30.00} />

      <div className="h-px w-full bg-neutral-400 my-10"></div>

      <form className="my-2 flex justify-end items-center" onSubmit={handleSubmit(handleClick)}>
        <Input placeholder="Cep" {...register('cep')} />
        <Input placeholder="Numero" {...register('numero')} />
        <Button className="bg-green-600 flex justify-center items-center">Calcular</Button>
      </form>

      {data && (
        <div>
          <p>Logradouro: {data.logradouro}</p>
          <p>Bairro: {data.bairro}</p>
          <p>Localidade: {data.localidade}</p>
        </div>
      )}

      <div className="bg-yellow-200 rounded p-2">
        <span className="flex items-center justify-between">
          <p>Items total</p>
          <p>${0.00}</p>
        </span>
        <span className="flex items-center justify-between">
          <p>Frete</p>
          <p>${0.00}</p>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-3xl">Total a pagar</p>
          <p className="text-3xl">${0.00}</p>
        </span>
      </div>

      <Button className="bg-green-600 rounded my-4">Submit</Button>
    </main>
  );
}
