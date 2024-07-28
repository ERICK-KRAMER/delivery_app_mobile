import { ProductDTO, useStore } from "@/app/context/storeContext";
import Image from "next/image";

const Products = () => {
  const { products, setItem, category, getItems } = useStore();

  const handleClick = (item: ProductDTO) => {
    getItems(item);
  }

  return (
    <>
      <div className="px-10 py-4 flex flex-col gap-2">

        {category === 1 ? (
          <>
            <div className="w-full bg-orange-400 rounded-xl flex items-center justify-between gap-1 p-2">
              <Image
                className="w-40"
                width={600}
                height={600}
                src="/pizza-product.png"
                alt="test"
              />
              <div className="felx flex-col gap-2 ">
                <p className="font-bold text-white text-base">Pizza Portuguesa</p>
                <p className="font-bold text-white">R$36.90</p>
                <button className="bg-red-300 rounded-lg px-10 py-2" onClick={setItem}>Adicionar</button>
              </div>
            </div>
          </>
        ) : null}

        {category === 0 ? (
          <>
            {products && products.map(product => (
              <div key={product.id} className="w-full bg-orange-400 rounded-xl flex items-center justify-between p-2">
                <Image
                  className="w-40"
                  width={600}
                  height={600}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="felx flex-col gap-2 ">
                  <p className="font-bold text-white text-base">{product.name}</p>
                  <p className="font-bold text-white">R${product.price}</p>
                  <button className="bg-red-300 rounded-lg px-10 py-2" onClick={() => handleClick(product)}>Adicionar</button>
                </div>
              </div>

            ))}
          </>
        ) : null}

        {category === 2 ? (
          <span className="text-lg text-red-500 font-bold">Não possuimos nenhum item dessa categoria ainda.</span>
        ) : null}

        {category === 3 ? (
          <span className="text-lg text-red-500 font-bold">Não possuimos nenhum item dessa categoria ainda.</span>
        ) : null}

      </div>
    </>
  )
}

export { Products };