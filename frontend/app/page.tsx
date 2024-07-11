import Image from "next/image";
import { Header } from "./components/header/header";
import { Slide } from "./components/slide/slide";

export default function Home() {
  return (
    <>
      <Header />
      <Slide>
        <div className=" h-64 flex items-center justify-center text-white">
          <div className="rounded-lg bg-orange-400 w-11/12 h-5/6 cursor-pointer flex relative justify-center items-end pb-10">
            <span className="font-bold">
              <p className="text-red-500 text-lg">Hamburguer Test por apenas $$$</p>
            </span>
            <Image
              className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-green-200"
              width={300}
              height={300}
              src="/hamburguer.jpg"
              alt="test"
            />
          </div>
        </div>
        <div className=" h-64 flex items-center justify-center text-white">
          <div className="rounded-lg bg-red-400 w-11/12 h-5/6 cursor-pointer flex relative justify-center items-end pb-10">
            <span className="font-bold">
              <p className="text-red-500 text-lg">Hamburguer Test por apenas $$$</p>
            </span>
            <Image
              className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-green-200"
              width={300}
              height={300}
              src="/hamburguer.jpg"
              alt="test"
            />
          </div>
        </div>
        <div className=" h-64 flex items-center justify-center text-white">
          <div className="rounded-lg bg-yellow-700 w-11/12 h-5/6 cursor-pointer flex relative justify-center items-end pb-10">
            <span className="font-bold">
              <p className="text-red-500 text-lg">Hamburguer Test por apenas $$$</p>
            </span>
            <Image
              className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-green-200"
              width={300}
              height={300}
              src="/hamburguer.jpg"
              alt="test"
            />
          </div>
        </div>
      </Slide>
    </>
  );
}
