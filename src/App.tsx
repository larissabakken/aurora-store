import { useState, useEffect } from "react";
import CardProducts from "./components/CardProducts";
import ShelfShows from "./components/ShelfConcerts";
import { DataItem } from "./utils/types";

export default function App() {
  const [products, setProducts] = useState<DataItem[]>([]);
  const [groupPromotion, setGroupPromotion] = useState<DataItem[]>([]);
  const [groupOthers, setGroupOthers] = useState<DataItem[]>([]);
  const [groupRecords, setGroupRecords] = useState<DataItem[]>([]);
  const [logo, setLogo] = useState<string>("");

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
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl mx-[8%]">
            <span className="ml-6">Promotions</span>
          </div>
          <CardProducts dataCard={groupPromotion} />
        </div>
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl mx-[8%]">
            <span className="ml-6">Records</span>
          </div>
          <CardProducts dataCard={groupRecords} />
        </div>
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl mx-[8%]">
            <span className="ml-6">Others</span>
          </div>
          <CardProducts dataCard={groupOthers} />
        </div>
      </div>
    </>
  );
}
