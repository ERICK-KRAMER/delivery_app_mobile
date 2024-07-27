import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState<number>(1);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return { count, increment, decrement };
};
export { useCount };