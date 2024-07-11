import { Header } from "./components/header/header";
import { Slide } from "./components/slide/slide";

export default function Home() {
  return (
    <>
      <Header />
      <Slide>
        <div className="bg-red-500 h-64 flex items-center justify-center text-white">
          Slide 1
        </div>
        <div className="bg-green-500 h-64 flex items-center justify-center text-white">
          Slide 2
        </div>
        <div className="bg-blue-500 h-64 flex items-center justify-center text-white">
          Slide 3
        </div>
      </Slide>
    </>
  );
}
