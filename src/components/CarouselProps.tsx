import React, { useState } from 'react';
import styles from './Components.module.css';

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

  return (
    <div className="aspect-w-1 aspect-h-1 w-[20rem] overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      
      <img className="h-full w-full object-cover object-center group-hover:opacity-75" src={images[currentImageIndex]} />
      <div className="flex">
      <button onClick={prevImage}>Prev</button>
      <button className="right" onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;