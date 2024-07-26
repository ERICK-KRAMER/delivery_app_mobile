'use client';

import { Header } from "./components/header/header";
import { useStore } from "./context/storeContext";
import { useEffect } from "react";
import { Categories } from "./components/categories/categories";
import { Banner } from "./components/categories/banner";
import { Products } from "./components/products/products";

export default function Home() {
  const { getProducts } = useStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);


  return (
    <>
      <Header />

      {/* filtros de categorias dos foods */}
      <Categories />

      {/* banner de apresentação da categoria */}
      <Banner />

      {/* lista os itens do banco de dados nessa área */}
      <Products />
    </>
  );
}
