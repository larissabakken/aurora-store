import { useState, useEffect } from "react";
import CarouselProps from "./CarouselProps";
import { DataItem } from "../utils/types";

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
            <div
              key={index}
              className="bg-[var(--color-bg-card)] w-full rounded-2xl shadow-2xl hover:shadow-[var(--color-shadow)]"
            >
              <CarouselProps dataCarousel={product.image} />
              <div className="mx-4 my-3">
                <h3 className="mt-4 text-sms text-gray-700">{product.name}</h3>
                {product.promotion === true ? (
                  <div>
                    <span className="mt-1 text-sm font-medium text-red-600 line-through">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    <p className="text-lg font-bold text-black ">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardProducts;
