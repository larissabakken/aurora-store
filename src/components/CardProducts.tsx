import { useState, useEffect } from "react";
import CarouselProps from "./CarouselProps";
import FavoriteButton from "./FavoriteButton";
import { DataItem } from "../utils/types";
import AddCart from "./AddCart";

interface CardProductsProps {
  dataCard: DataItem[];
}

const CardProducts = (props: CardProductsProps) => {
  // Declare and initialize state for products
  const [products, setProducts] = useState<DataItem[]>([]);

  // Update products when props.dataCard changes
  useEffect(() => {
    setProducts(props.dataCard);
  }, [props.dataCard]);

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Grid for displaying products */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-card)] w-full rounded-2xl shadow-2xl hover:shadow-[var(--color-shadow)] relative"
            >
              {/* Favorite button */}
              <div className="w-full absolute top-[5%] left-5">
                <FavoriteButton />
              </div>

              {/* Product images */}
              <CarouselProps dataCarousel={product.image} />

              {/* Product details */}
              <div className="mx-4 my-3 h-[8rem] relative">
                {/* Product name */}
                <p className="mt-4 text-lg text-bold text-gray-700 truncate">
                  {product.name}
                </p>
                {/* Product price and promotion */}
                {product.promotion === true ? (
                  <div className="flex">
                    {/* Original price */}
                    <span className="mt-1 text-lg font-thin text-white line-through mr-2">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    {/* Discounted price */}
                    <p className="text-xl font-bold text-black">
                      {product.promotion_price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                ) : (
                  // Regular price
                  <p className="mt-1 text-xl font-bold text-black">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                )}
                {/* Add to cart button */}
                <div className="absolute bottom-0 w-full">
                  <AddCart />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardProducts;
