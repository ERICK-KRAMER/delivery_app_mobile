'use client';

import Image from "next/image";
import { Header } from "./components/header/header";
import { Slide } from "./components/slide/slide";
import { useStore } from "./context/storeContext";
import { useEffect } from "react";
import { Categories } from "./components/categories/categories";
import { Banner } from "./components/categories/banner";

export default function Home() {

  const { setItem, products, getProducts } = useStore();

  useEffect(() => {
    console.log('useEffect called');
    getProducts();
  }, []);

  useEffect(() => {
    console.log('Products updated:', products);
  }, [products]);

  return (
    <>
      <Header />

      {/* slides com foods promoçionais */}

      <Slide>
        <div className=" h-64 flex items-center justify-center text-white">
          <div className="rounded-lg bg-orange-400 w-11/12 h-5/6 cursor-pointer flex relative justify-center items-end pb-10">
            <span className="font-bold">
              <p className="text-red-500 text-lg">Hamburguer Test por apenas $$$</p>
            </span>
            <Image
              className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              width={300}
              height={300}
              src="/hamburguer.png"
              alt="test"
            />
          </div>
        </div>
        <div className=" h-64 flex items-center justify-center text-white">
          <div className="rounded-lg bg-red-400 w-11/12 h-5/6 cursor-pointer flex relative justify-center items-end pb-10">
            <span className="font-bold">
              <p className="text-red-500 text-lg">Hamburguer Test por apenas $$$</p>
            </span>
            <Image
              className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              width={300}
              height={300}
              src="/hamburguer.png"
              alt="test"
            />
          </div>
        </div>
        <div className=" h-64 flex items-center justify-center text-white">
          <div className="rounded-lg bg-yellow-700 w-11/12 h-5/6 cursor-pointer flex relative justify-center items-end pb-10">
            <span className="font-bold">
              <p className="text-red-500 text-lg">Hamburguer Test por apenas $$$</p>
            </span>
            <Image
              className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              width={300}
              height={300}
              src="/hamburguer.png"
              alt="test"
            />
          </div>
        </div>
      </Slide>

      {/* filtros de categorias dos foods */}

      <Categories />

      {/*  banner de apresentaçao da categoria */}

      <Banner />

      {/* lista os item do banco de dados nessa area */}

      <div className="px-5 py-4 grid gap-2 grid-cols-2 place-items-center">
        <div className="w-44 h-56 bg-orange-400 rounded-xl flex items-center justify-center flex-col gap-1">
          <Image
            className="w-36"
            width={600}
            height={600}
            src="/pizza-product.png"
            alt="test"
          />
          <span className="font-bold text-white text-lg">Pizza Portuguesa</span>
          <span className="font-semibold text-white">R$36.90</span>
          <button className="bg-red-300 rounded-lg px-10 py-2" onClick={setItem}>Adicionar</button>
        </div>

        <div className="w-44 h-56 bg-orange-400 rounded-xl flex items-center justify-center flex-col gap-1">
          <Image
            className="w-36"
            width={600}
            height={600}
            src="/pizza-product.png"
            alt="test"
          />
          <span className="font-bold text-white text-lg">Pizza Portuguesa</span>
          <span className="font-semibold text-white">R$36.90</span>
          <button className="bg-red-300 rounded-lg px-10 py-2" onClick={setItem}>Adicionar</button>
        </div>

        {products && products.map(product => (
          <div key={product.id} className="w-44 h-56 bg-orange-400 rounded-xl flex items-center justify-center flex-col gap-1">
            <Image
              className="w-36"
              width={600}
              height={600}
              src={product.imageUrl}
              alt={product.name}
            />
            <span className="font-bold text-white text-lg">{product.name}</span>
            <span className="font-semibold text-white">{`R$${product.price}`}</span>
            <button className="bg-red-300 rounded-lg px-10 py-2" onClick={setItem}>Adicionar</button>
          </div>
        ))}
      </div>
    </>
  );
}
