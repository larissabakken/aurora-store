import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const imageUrl = images.map((image) => image.url);

  return (
    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
      <div className="bg-gray-100 flex items-center justify-center">
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
