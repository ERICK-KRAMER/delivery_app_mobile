'use client';

import { createContext, useContext, useEffect, useState } from "react";
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
  totalValue: number | null;
  items: ProductDTO[];
  getItems(item: ProductDTO): void;
  setItem(): void;
  setCategories(index: number): void;
  getTotalValue(total: number): void;
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
  const [items, setItems] = useState<ProductDTO[]>([]);
  const [category, setCategory] = useState<number>(0);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [totalValue, setTotalValue] = useState<number | null>(null);

  const setItem = () => {
    setCartItem(prev => prev + 1);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:3333/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const getItems = (item: ProductDTO) => {
    setItems(prev => [...prev, item]);
  };

  const setCategories = (index: number): void => {
    setCategory(index);
  };

  const getTotalValue = (total: number): void => {
    setTotalValue(total);
  };

  const methods: StoreContextProps = {
    setItem,
    setCategories,
    getTotalValue,
    getItems,
    items,
    totalValue,
    cartItem,
    category,
    products,
  };

  return (
    <StoreContext.Provider value={methods}>{children}</StoreContext.Provider>
  )
};

export { StoreContextProvider, useStore };