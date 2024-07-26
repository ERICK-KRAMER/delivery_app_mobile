import { useStore } from "@/app/context/storeContext";
import Image from "next/image";

const Banner = () => {
  const { category } = useStore();

  return (
    <>
      <div className="p-5">
        <div className=" h-52 flex items-center justify-center flex-col gap-4 text-white">
          <div className="rounded-lg bg-orange-400 w-11/12 h-3/4 flex relative justify-center items-end pb-10">
            {category == 0 ? (
              <Image
                className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 "
                width={600}
                height={600}
                src="/hamburguer.png"
                alt="test"
              />
            ) : (
              null
            )}
            {category == 1 ? (
              <Image
                className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-52 "
                width={600}
                height={600}
                src="/pizza-product.png"
                alt="test"
              />
            ) : (
              null
            )}
            {category == 2 ? (
              <Image
                className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 "
                width={700}
                height={700}
                src="https://d3sn2rlrwxy0ce.cloudfront.net/Sundae-Chocolate-thumb.png?mtime=20210916155926&focal=none"
                alt="test"
              />
            ) : (
              null
            )}

            {category == 3 ? (
              <Image
                className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-64 "
                width={500}
                height={500}
                src="https://d2umxhib5z7frz.cloudfront.net/Brasil/569636%20DLV.png?1683211015434"
                alt="test"
              />
            ) : (
              null
            )}

          </div>
          <span className="font-bold">
            {category == 0 ? (
              <p className="text-red-500 text-lg"> Hamburgueres a partir de 29.90</p>
            ) : null}
            {category == 1 ? (
              <p className="text-red-500 text-lg">Pizzas a partir de R$35.90</p>
            ) : null}
            {category == 2 ? (
              <p className="text-red-500 text-lg">Sobremesas a partir de R$5.90</p>
            ) : null}
            {category == 3 ? (
              <p className="text-red-500 text-lg">Bebidas a partir de R$2.90</p>
            ) : null}
          </span>
        </div>
      </div>
    </>
  );
}
export { Banner };