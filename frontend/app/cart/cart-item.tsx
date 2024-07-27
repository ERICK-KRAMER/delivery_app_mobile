import { Trash2 } from "lucide-react";
import { useCount } from "../hooks/useCount";

type CartItemProps = {
  id?: number;
  name: string;
  price: string;
};

const CartItem = (data: CartItemProps) => {

  const { increment, count, decrement } = useCount();

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <span>{data.name}</span>
          <span>${data.price}</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button><Trash2 className="text-red-500" /></button>
          <div className="mt-5">
            <div className="border border-orange-400 rounded w-24 p-1 px-3 flex justify-between items-center">
              <button className="text-orange-400 cursor-pointer text-2xl active:scale-90" name="decrement" onClick={decrement}>-</button>
              <span>{count}</span>
              <button className="text-orange-400 cursor-pointer text-2xl active:scale-90" name="increment" onClick={increment}>+</button>
            </div>
            <small>${(count * Number(data.price))}</small>
          </div>
        </div>
      </div>
    </>
  );
}
export { CartItem };