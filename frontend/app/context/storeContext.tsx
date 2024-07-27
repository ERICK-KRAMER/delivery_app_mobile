'use client';

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

export interface ProductDTO {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  discountPercentage: number;
  categoryId: string;
  quantity: number;
};

interface StoreContextProps {
  cartItem: number;
  category: number;
  products: ProductDTO[];
  totalValue: number | null;
  items: ProductDTO[];
  setItems: Dispatch<SetStateAction<ProductDTO[]>>;
  getItems(item: ProductDTO): void;
  setItem(): void;
  setCategories(index: number): void;
  getTotalValue(total: number): void;
  removeItem(id: string): void;
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
    setCartItem((prev) => prev + 1);
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
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const getItems = (newItem: ProductDTO) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
  };

  const setCategories = (index: number): void => {
    setCategory(index);
  };

  const getTotalValue = (total: number): void => {
    setTotalValue(total);
  };

  const removeItem = (id: string): void => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
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
    setItems,
    removeItem,
  };

  return (
    <StoreContext.Provider value={methods}>{children}</StoreContext.Provider>
  );
};

export { StoreContextProvider, useStore };
