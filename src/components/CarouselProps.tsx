import React, { useState } from "react";
import { ImagesProps } from "../utils/types";



interface CarouselProps {
  dataCarousel: ImagesProps[];
}

const Carousel = ({ dataCarousel }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % dataCarousel.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + dataCarousel.length) % dataCarousel.length;
    setCurrentImageIndex(newIndex);
  };

  const imageUrl = dataCarousel.map((image) => image.url);

  return (
    <div className="aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <div className=" flex items-center justify-center">
        <img
          className="w-full object-cover object-center group-hover:opacity-75"
          src={imageUrl[currentImageIndex]}
        />
      </div>

      <div className="flex">
        <button onClick={prevImage}>Prev</button>
        <button className="right" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;