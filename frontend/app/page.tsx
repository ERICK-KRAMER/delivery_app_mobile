'use client';

import Image from "next/image";
import { Header } from "./components/header/header";
import { Slide } from "./components/slide/slide";
import { useStore } from "./context/storeContext";
import { useEffect } from "react";
import { Categories } from "./components/categories/categories";
import { Banner } from "./components/categories/banner";
import { Products } from "./components/products/products";

export default function Home() {

  const { products, getProducts } = useStore();

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

      <Products />
    </>
  );
}
