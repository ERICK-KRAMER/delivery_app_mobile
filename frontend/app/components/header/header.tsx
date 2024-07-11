import { Search, ShoppingBag, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <span className="p-2 rounded-full shadow-md shadow-gray-400 cursor-pointer">
        <User className="text-red-300" />
      </span>
      <div className="flex justify-center items-center gap-3">
        <span className="p-2 rounded-full shadow-md shadow-gray-400 cursor-pointer">
          <Search className="text-red-300" />
        </span>
        <span className="p-2 rounded-full shadow-md shadow-gray-400 cursor-pointer">
          <ShoppingBag className="text-red-300" />
        </span>
      </div>
    </header>
  )
};
export { Header };