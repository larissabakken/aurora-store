import { useState, useEffect } from "react";
import CarouselProps from "./CarouselProps";
import { DataItem, ImagesProps } from "../utils/types";

interface CardProductsProps {
  dataCard: DataItem[];
}

const CardProducts = (props: CardProductsProps) => {
  const [products, setProducts] = useState<DataItem[]>([]);

  useEffect(() => {
    setProducts(props.dataCard);
  }, [props.dataCard]);

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-200 w-full rounded-lg shadow-md hover:shadow-2xl">
              <CarouselProps dataCarousel={product.image} />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              {product.promotion === true ? (
                <div>
                  <span className="mt-1 text-sm font-medium text-gray-900 line-through">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <p className="text-lg font-medium text-red-500">
                    {product.promotion_price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              ) : (
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardProducts;
