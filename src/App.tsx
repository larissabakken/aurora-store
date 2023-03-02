import { useState, useEffect } from "react";
import CardProducts from "./components/CardProducts";
import ShelfShows from "./components/ShelfConcerts";

export default function App() {
  const [products, setProducts] = useState([]);
  const [groupPromotion, setGroupPromotion] = useState([]);
  const [groupOthers, setGroupOthers] = useState([]);
  const [groupRecords, setGroupRecords] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setGroupPromotion(products.filter((product) => product.promotion === true));
  }, [products]);

  useEffect(() => {
    setGroupOthers(products.filter((product) => product.category === "others"));
  }, [products]);

  useEffect(() => {
    setGroupRecords(
      products.filter(
        (product) =>
          product.category === "CD" ||
          product.category === "Vinyl" ||
          product.category === "Cassette"
      )
    );
  }, [products]);

  console.log(groupPromotion, "groupPromotion");
  console.log(groupOthers, "groupOthers");
  console.log(groupRecords, "groupRecords");

  return (
    <>
      <div>
      <div>
          <h1>Promotions</h1>
          <CardProducts data={groupPromotion} />
        </div>
        {/* <div>
          <h1>Products</h1>
          <CardProducts data={products} />
        </div> */}

        {/* <ShelfShows /> */}
        

        {/* <ul>
          {products.map((product: any) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
