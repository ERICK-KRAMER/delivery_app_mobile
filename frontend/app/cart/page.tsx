'use client';

import Link from "next/link";
import { ChevronLeft, TimerIcon, User } from "lucide-react";
import { CartItem } from "./cart-item";
import { Button } from "../components/button/button-login";
import { Input } from "../components/input/input";
import { useForm } from "react-hook-form";
import { GetLocation, ViaCepResponse } from "../api/viaCep/viacep";
import { useState, useEffect } from "react";
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
  const [total, setTotal] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleClick = async (formData: any) => {
    try {
      const response = await GetLocation(formData.cep);
      setData(response);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to fetch location data:", error);
      setIsSubmitted(false);
    }
  };

  const calculateTotal = () => {
    if (data && freteValues.hasOwnProperty(data.bairro)) {
      const itemsTotal = items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
      const frete = freteValues[data.bairro as BairroAtendido];
      const total = itemsTotal + frete;
      getTotalValue(total);
      setTotal(total);
      return total;
    }
    return 0;
  };

  useEffect(() => {
    if (isSubmitted) {
      calculateTotal();
    }
  }, [data, items]);

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

      {items.length !== 0 ? (
        <>
          {items.map((item, index) => (
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              key={index}
              removeItem={removeItem}
              quantity={item.quantity}
            />
          ))}

          <form className="my-2 flex justify-end items-center" onSubmit={handleSubmit(handleClick)}>
            <Input placeholder="Cep" {...register('cep')} />
            <Input placeholder="Numero" {...register('numero')} />
            <Button className="bg-green-600 flex justify-center items-center">Calcular</Button>
          </form>

          {isSubmitted && data && (
            <div>
              <p>Logradouro: {data.logradouro}</p>
              <p>Bairro: {data.bairro}</p>
              <p>Localidade: {data.localidade}</p>
            </div>
          )}

          {isSubmitted && data && freteValues.hasOwnProperty(data.bairro) ? (
            <>
              <div className="bg-yellow-200 rounded p-2">
                <span className="flex items-center justify-between">
                  <p>Total Items</p>
                  <p>R${items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2)}</p>
                </span>
                <span className="flex items-center justify-between">
                  <p>Frete</p>
                  <p>R${freteValues[data.bairro as BairroAtendido].toFixed(2)}</p>
                </span>
                <span className="flex items-center justify-between">
                  <p className="text-3xl">Total a pagar</p>
                  <p className="text-3xl">R${total.toFixed(2)}</p>
                </span>
              </div>
              <Select />
              <Button className="bg-green-600 rounded my-4">Submit</Button>
            </>
          ) : (
            isSubmitted && !freteValues.hasOwnProperty(data?.bairro || '') && (
              <span className="text-lg text-red-500 font-bold">Não estamos fazendo atendimento delivery nessa localidade.</span>
            )
          )}
        </>
      ) : (
        <span className="text-lg text-red-500 font-bold">Você ainda não adicionou nenhum item na sacola</span>
      )}
    </main>
  );
}
