'use client';

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useCount } from "../hooks/useCount";

export default function Page() {
  const { increment, count, decrement } = useCount();

  return (
    <main className="relative p-8 py-8">
      <div className="mb-10">
        <Link href={"/"} className="rounded-full shadow-md shadow-gray-400 cursor-pointer"><ChevronLeft className="text-red-300" /></Link>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <span>name</span>
          <span>${30.00}</span>
        </div>
        <div>
          <div className="border border-orange-400 rounded w-24 p-1 px-3 flex justify-between items-center">
            <button className="text-orange-400 cursor-pointer text-2xl active:scale-90" name="decrement" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="text-orange-400 cursor-pointer text-2xl active:scale-90" name="increment" onClick={increment}>+</button>
          </div>
          <small>${30.00}</small>
        </div>
      </div>
    </main>
  )
};