'use client';

import Link from "next/link";
import { ChevronLeft, TimerIcon, User } from "lucide-react";
import { CartItem } from "./cart-item";
import { Button } from "../components/button/button-login";
import { Input } from "../components/input/input";
import { useForm } from "react-hook-form";
import { GetLocation, ViaCepResponse } from "../api/viaCep/viacep";
import { useState } from "react";
import { useStore } from "../context/storeContext";
import { Select } from "../components/select/select";

type BairroAtendido = 'Jordão' | 'Prazeres' | 'Ibura';

const freteValues: Record<BairroAtendido, number> = {
  'Jordão': 5.00,
  'Prazeres': 7.50,
  'Ibura': 10.00,
};

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<ViaCepResponse | null>(null);
  const { getTotalValue, items, removeItem } = useStore();

  const handleClick = async (formData: any) => {
    try {
      const response = await GetLocation(formData.cep);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch location data:", error);
    }
  };

  const calculateTotal = () => {
    if (data && freteValues.hasOwnProperty(data.bairro)) {
      const itemPrice = 30.00;
      const frete = freteValues[data.bairro as BairroAtendido];
      const total = itemPrice + frete;
      getTotalValue(total);
      return total;
    }
    return 0;
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

      {items.map((item, index) => (
        <CartItem
          id={item.id}
          name={item.name}
          price={item.price}
          key={index}
          removeItem={removeItem}
        />
      ))}

      {items.length !== 0 && items.length !== null ? (
        <form className="my-2 flex justify-end items-center" onSubmit={handleSubmit(handleClick)}>
          <Input placeholder="Cep" {...register('cep')} />
          <Input placeholder="Numero" {...register('numero')} />
          <Button className="bg-green-600 flex justify-center items-center">Calcular</Button>
        </form>
      ) : (
        <span className="text-lg text-red-500 font-bold">Você ainda não adicionou nenhum item na sacola</span>
      )}

      {data && (
        <div>
          <p>Logradouro: {data.logradouro}</p>
          <p>Bairro: {data.bairro}</p>
          <p>Localidade: {data.localidade}</p>
        </div>
      )}

      {data && (
        freteValues.hasOwnProperty(data.bairro) ? (
          <>
            <div className="bg-yellow-200 rounded p-2">
              <span className="flex items-center justify-between">
                <p>Total Items</p>
                <p>R${30.00}</p>
              </span>
              <span className="flex items-center justify-between">
                <p>Frete</p>
                <p>R${freteValues[data.bairro as BairroAtendido]}</p>
              </span>
              <span className="flex items-center justify-between">
                <p className="text-3xl">Total a pagar</p>
                <p className="text-3xl">R${calculateTotal()}</p>
              </span>
            </div>
            <Select />
            <Button className="bg-green-600 rounded my-4">Submit</Button>
          </>
        ) : (
          <span className="text-lg text-red-500 font-bold">Não estamos fazendo atendimento delivery nessa localidade.</span>
        )
      )}
    </main>
  );
}
