'use client';

import { createContext, useContext, useState } from "react";

interface StoreContextProps {
  cartItem: number;
  category: number;
  setItem(): void;
  setCategories(index: number): void;
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

  const setItem = () => {
    setCartItem(prev => prev + 1);
  }

  const setCategories = (index: number) => {
    setCategory(index);
  };

  const methods: StoreContextProps = {
    setItem,
    setCategories,
    cartItem,
    category
  };

  return (
    <StoreContext.Provider value={methods}>{children}</StoreContext.Provider>
  )
};

export { StoreContextProvider, useStore };