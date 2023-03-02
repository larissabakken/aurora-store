import { useState, useEffect } from "react";
import CardProducts from "./components/CardProducts";
import ShelfShows from "./components/ShelfConcerts";

export default function App() {
  const [products, setProducts] = useState([]);
  const [groupPromotion, setGroupPromotion] = useState([]);
  const [groupOthers, setGroupOthers] = useState([]);
  const [groupRecords, setGroupRecords] = useState([]);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLogo(data.logo);
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
      <div className="flex justify-center items-center m-10">
        <img src={logo} alt="Aurora" />
      </div>
      <div>
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl mx-[2rem]">
            <span className="ml-6">Promotions</span>
          </div>
          <CardProducts data={groupPromotion} />
        </div>
      </div>
    </>
  );
}
