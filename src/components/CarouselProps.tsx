import { useState } from "react";
import { ImagesProps } from "../utils/types";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface CarouselProps {
  dataCarousel: ImagesProps[];
}

const Carousel = ({ dataCarousel }: CarouselProps) => {
  // use state to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // function to display the next image in the carousel
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % dataCarousel.length;
    setCurrentImageIndex(newIndex);
  };

  // function to display the previous image in the carousel
  const prevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + dataCarousel.length) % dataCarousel.length;
    setCurrentImageIndex(newIndex);
  };

  // create an array of image URLs to display in the carousel
  const imageUrl = dataCarousel.map((image) => image.url);

  return (
    <div>
      {/* button to show the previous image */}
      <button
        className="absolute left-0 top-1/3 transform -translate-y-1/2 py-20 px-5"
        onClick={prevImage}
      >
        <BsFillArrowLeftCircleFill size={20} />
      </button>
      <div className="aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        {/* display the current image */}
        <div className="flex items-center justify-center hover:scale-110">
          <img
            className="h-[20rem] p-2 object-cover object-center group-hover:opacity-75"
            src={imageUrl[currentImageIndex]}
            alt="Product image"
          />
        </div>

        {/* button to show the next image */}
        <button
          className="absolute right-0 top-1/3 transform -translate-y-1/2 py-20 px-5"
          onClick={nextImage}
        >
          <BsFillArrowRightCircleFill size={20} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
