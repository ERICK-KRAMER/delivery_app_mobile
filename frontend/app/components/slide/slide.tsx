'use client';

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";

const Slide = ({ children }: { children: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {children.map((child, index) => (
            <div className="min-w-full box-border p-5" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-5 mt-3">
        <button
          onClick={prevSlide}
          className="mx-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          <ChevronsLeft />
        </button>
        <button
          onClick={nextSlide}
          className="mx-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

export { Slide };
