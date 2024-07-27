import { Trash2 } from "lucide-react";
import { useCount } from "../hooks/useCount";

type CartItemProps = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  removeItem: (id: string) => void;
};

const CartItem = (data: CartItemProps) => {
  const { count, increment, decrement } = useCount(data.quantity);

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <span>{data.name}</span>
          <span>${parseFloat(data.price).toFixed(2)}</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button onClick={() => data.removeItem(data.id)}>
            <Trash2 className="text-red-500" />
          </button>
          <div className="mt-5">
            <div className="border border-orange-400 rounded w-24 p-1 px-3 flex justify-between items-center">
              <button className="text-orange-400" onClick={decrement}>-</button>
              <span className="text-black">{count}</span>
              <button className="text-orange-400" onClick={increment}>+</button>
            </div>
            <small>${(count * parseFloat(data.price)).toFixed(2)}</small>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-neutral-400 my-10"></div>
    </>
  );
};

export { CartItem };
