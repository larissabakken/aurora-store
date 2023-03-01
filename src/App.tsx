import { useState, useEffect } from "react";
import ShelfShows from "./components/ShelfConcerts";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        // handle the response data here
        console.log(data, "data");
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(products, "products after fetch");
  return (
    <>
      <div>
        <h1>Products</h1>
        <ShelfShows />
        
        <ul>
          
          {products.map((product: any) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
