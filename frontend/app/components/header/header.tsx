import { useStore } from "@/app/context/storeContext";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { items } = useStore();

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="flex justify-between items-center p-5">
      <Link href={"/login"} className="p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer">
        <User className="text-red-300" />
      </Link>
      <div className="flex justify-center items-center gap-4">
        <div className={`relative transition-all duration-500 ease-in-out ${isOpen ? "w-[240px]" : "w-10"}`}>
          <input type="text" className={` w-full py-3 rounded-3xl outline-none text-white font-medium transition-all duration-500 ease-in-out ${isOpen ? "pl-14 shadow-md shadow-gray-400 bg-red-300" : "pl-2"}`} />
          <span
            className="p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer absolute left-0 bg-white"
            onClick={handleClick}
          >
            <Search className="text-red-300" />
          </span>
        </div>
        <Link href={'/cart'} className="p-3 rounded-full shadow-md shadow-gray-400 cursor-pointer relative">
          <ShoppingBag className="text-red-300" />
          {items ? (
            <span className="bg-red-500 text-white text-sm w-4 h-4 rounded-full flex justify-center items-center absolute top-2 right-1">{items.length}</span>
          ) : null}
        </Link>
      </div>
    </header>
  );
};
export { Header };
