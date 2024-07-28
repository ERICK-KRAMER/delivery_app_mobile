import { useState, useEffect } from "react";

export const useCount = (initialCount: number = 1, onChange: (count: number) => void) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return { count, increment, decrement, setCount };
};
