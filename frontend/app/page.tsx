'use client';

import { Header } from "./components/header/header";
import { Categories } from "./components/categories/categories";
import { Banner } from "./components/categories/banner";
import { Products } from "./components/products/products";

export default function Home() {


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
