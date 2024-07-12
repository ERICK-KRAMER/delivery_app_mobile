import { Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="flex justify-between items-center p-5">
      <span className="p-2 rounded-full shadow-md shadow-gray-400 cursor-pointer">
        <User className="text-red-300" />
      </span>
      <div className="flex justify-center items-center gap-4">
        <div className={`relative transition-all duration-500 ease-in-out ${isOpen ? "w-[345px]" : "w-10"}`}>
          <input type="text" className={`bg-red-300 w-full py-2 rounded-3xl outline-none text-white font-medium shadow-md shadow-gray-400 transition-all duration-500 ease-in-out ${isOpen ? "pl-12" : "pl-2"}`} />
          <span
            className="p-2 rounded-full shadow-md shadow-gray-400 cursor-pointer absolute left-0 bg-white"
            onClick={handleClick}
          >
            <Search className="text-red-300" />
          </span>
        </div>
        <span className="p-2 rounded-full shadow-md shadow-gray-400 cursor-pointer relative">
          <ShoppingBag className="text-red-300" />
          <span className="bg-red-500 text-white text-sm w-4 h-4 rounded-full flex justify-center items-center absolute top-0 right-0">0</span>
        </span>
      </div>
    </header>
  );
};
export { Header };
