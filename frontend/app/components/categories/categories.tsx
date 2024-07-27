import { useStore } from "@/app/context/storeContext";
import { Beer, ChevronRight } from "lucide-react";
import Image from "next/image";

const Categories = () => {
  const { category, setCategories } = useStore();

  return (
    <>
      <div className="flex justify-between p-5 px-12">
        <span
          className={`h-24 w-16 rounded flex items-center justify-center flex-col gap-1 cursor-pointer ${category === 0 ? 'bg-orange-400 neon-item' : null
            }`}
          onClick={() => setCategories(0)}
        >
          <Image src="/buger.png" alt="Buger" width={20} height={20} />
          <p>Burger</p>
          <span className={`w-5 h-5 rounded-full bg-black flex justify-center items-center transition-all duration-500 ease-in-out ${category === 0 ? "rotate-90" : ""}`}>
            <ChevronRight size={16} className="text-white rounded-full" />
          </span>
        </span>
        <span
          className={`h-24 w-16 rounded flex items-center justify-center flex-col gap-1 cursor-pointer ${category === 1 ? 'bg-orange-400 neon-item' : null
            }`}
          onClick={() => setCategories(1)}
        >
          <Image src="/pizza.png" alt="Pizza" width={20} height={20} />
          <p>Pizza</p>
          <span className={`w-5 h-5 rounded-full bg-black flex justify-center items-center transition-all duration-500 ease-in-out ${category === 1 ? "rotate-90" : ""}`}>

            <ChevronRight size={16} className="text-white rounded-full" />
          </span>
        </span>
        <span
          className={`h-24 w-16 rounded flex items-center justify-center flex-col gap-1 cursor-pointer ${category === 2 ? 'bg-orange-400 neon-item' : null
            }`}
          onClick={() => setCategories(2)}
        >
          <Image src="/sweet.png" alt="Sweet" width={20} height={20} />
          <p>Sweet</p>
          <span className={`w-5 h-5 rounded-full bg-black flex justify-center items-center transition-all duration-500 ease-in-out ${category === 2 ? "rotate-90" : ""}`}>

            <ChevronRight size={16} className="text-white rounded-full" />
          </span>
        </span>
        <span
          className={`h-24 w-16 rounded flex items-center justify-center flex-col gap-1 cursor-pointer ${category === 3 ? 'bg-orange-400 neon-item' : null
            }`}
          onClick={() => setCategories(3)}
        >
          <Beer width={20} height={20} />
          <p>Drinks</p>
          <span className={`w-5 h-5 rounded-full bg-black flex justify-center items-center transition-all duration-500 ease-in-out ${category === 3 ? "rotate-90" : ""}`}>

            <ChevronRight size={16} className="text-white rounded-full" />
          </span>
        </span>
      </div>
    </>
  )
}
export { Categories };