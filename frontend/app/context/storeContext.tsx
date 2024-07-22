'use client';

import { createContext, useContext, useState } from "react";
export interface ProductDTO {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  discountPercentage: number
  categoryId: string
};

interface StoreContextProps {
  cartItem: number;
  category: number;
  products: ProductDTO[];
  setItem(): void;
  setCategories(index: number): void;
  getProducts(): Promise<void>;
};

const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItem, setCartItem] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const setItem = () => {
    setCartItem(prev => prev + 1);
  };

  const getProducts = async () => {
    const response = await fetch('http://localhost:3333/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setProducts(data);
  };

  const setCategories = (index: number) => {
    setCategory(index);
  };

  const methods: StoreContextProps = {
    setItem,
    setCategories,
    cartItem,
    category,
    products,
    getProducts,
  };

  return (
    <StoreContext.Provider value={methods}>{children}</StoreContext.Provider>
  )
};

export { StoreContextProvider, useStore };