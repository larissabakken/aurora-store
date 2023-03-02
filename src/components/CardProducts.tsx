import React, { useState, useEffect } from "react";
import CarouselProps from "./CarouselProps";

const CardProducts = ({ data }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  console.log(products, "products on card");

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product, index) => (
                <div key={index}>
                    <CarouselProps images={product.image} />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  {product.promotion === true ? (
                    <div>
                      <span className="mt-1 text-sm font-medium text-gray-900 line-through">
                        {product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                      </span>
                      <p className="text-lg font-medium text-red-500">
                        {product.promotion_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </p>
                  )}
                </div>
              ))}

              {/* {products.map((product, index) => (
                <a key={index} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.url}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                
              ))} */}
            </div>
          </div>
        </div>
        {/* <CarouselProps /> */}
      </div>
    </>
  );
};

export default CardProducts;
