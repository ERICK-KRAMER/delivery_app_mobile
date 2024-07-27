import { useState } from "react";

export const useCount = (initialCount: number = 1) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return { count, increment, decrement, setCount };
};
