import { ProductDTO, useStore } from "@/app/context/storeContext";
import Image from "next/image";

const Products = () => {
  const { products, setItem, category, getItems } = useStore();

  const handleClick = (item: ProductDTO) => {
    getItems(item);
  }

  return (
    <>
      <div className="px-5 py-4 grid gap-2 grid-cols-2 place-items-center">

        {category === 1 ? (
          <>
            <div className="w-44 h-60 bg-orange-400 rounded-xl flex items-center justify-center flex-col gap-1">
              <Image
                className="w-36"
                width={600}
                height={600}
                src="/pizza-product.png"
                alt="test"
              />
              <span className="font-bold text-white text-base text-center">Pizza Portuguesa</span>
              <span className="font-semibold text-white">R$36.90</span>
              <button className="bg-red-300 rounded-lg px-10 py-2" onClick={setItem}>Adicionar</button>
            </div>


            <div className="w-44 h-60 bg-orange-400 rounded-xl flex items-center justify-center flex-col gap-1">
              <Image
                className="w-36"
                width={600}
                height={600}
                src="/pizza-product.png"
                alt="test"
              />
              <span className="font-bold text-white text-base text-center">Pizza Portuguesa</span>
              <span className="font-semibold text-white">R$36.90</span>
              <button className="bg-red-300 rounded-lg px-10 py-2" onClick={setItem}>Adicionar</button>
            </div>
          </>
        ) : null}

        {category === 0 ? (
          <>
            {products && products.map(product => (
              <div key={product.id} className="w-44 h-60 bg-orange-400 rounded-xl flex items-center justify-center flex-col gap-1">
                <Image
                  className="w-36"
                  width={600}
                  height={600}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span className="font-bold text-white text-base text-center px-1">{product.name}</span>
                <span className="font-semibold text-white">{`R$${product.price}`}</span>
                <button className="bg-red-300 rounded-lg px-10 py-2" onClick={() => handleClick(product)}>Adicionar</button>
              </div>
            ))}
          </>
        ) : null}

      </div>
    </>
  )
}

export { Products };