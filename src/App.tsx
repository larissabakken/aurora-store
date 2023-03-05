import { useState, useEffect } from "react";
import CardProducts from "./components/CardProducts";
import ShelfConcerts from "./components/ShelfConcerts";
import { DataItem } from "./utils/types";

export default function App() {
  const [products, setProducts] = useState<DataItem[]>([]);
  const [groupPromotion, setGroupPromotion] = useState<DataItem[]>([]);
  const [groupOthers, setGroupOthers] = useState<DataItem[]>([]);
  const [groupRecords, setGroupRecords] = useState<DataItem[]>([]);
  const [isQuantity, setIsQuantity] = useState<DataItem[]>([]);
  const [soldOut, setSoldOut] = useState<DataItem[]>([]);
  const [logo, setLogo] = useState<string>("");

  // Fetch products and logo from JSON file and set them as state
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data.products);
        setLogo(data.logo);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  // Filter products by quantity and set them as state
  useEffect(() => {
    setIsQuantity(products.filter((product) => product.quantity > 0));
  }, [products]);

  // Filter sold-out products and set them as state
  useEffect(() => {
    setSoldOut(products.filter((product) => product.quantity === 0));
  }, [products]);

  // Filter products in promotion and set them as state
  useEffect(() => {
    setGroupPromotion(
      isQuantity.filter((product) => product.promotion === true)
    );
  }, [isQuantity]);

  // Filter products in the "others" category and set them as state
  useEffect(() => {
    setGroupOthers(
      isQuantity.filter((product) => product.category === "others")
    );
  }, [isQuantity]);

  // Filter products in the "CD", "Vinyl", and "Cassette" categories and set them as state
  useEffect(() => {
    setGroupRecords(
      isQuantity.filter(
        (product) =>
          product.category === "CD" ||
          product.category === "Vinyl" ||
          product.category === "Cassette"
      )
    );
  }, [isQuantity]);

  return (
    <>
      {/* Logo */}
      <div className="flex justify-center items-center m-10">
        <img src={logo} alt="Aurora" />
      </div>

      {/* Product categories */}
      <div>
        {/* Promotions */}
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl w-min mx-5">
            <span className="px-20">Promotions</span>
          </div>
          <CardProducts dataCard={groupPromotion} />
        </div>

        {/* Records */}
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl w-min mx-5">
            <span className="px-20">Records</span>
          </div>
          <CardProducts dataCard={groupRecords} />
        </div>

        {/* Others */}
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl w-min mx-5">
            <span className="px-20">Others</span>
          </div>
          <CardProducts dataCard={groupOthers} />
        </div>

        {/* Sold Out */}
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl w-min mx-5">
            <p className="px-20">Sold</p>
          </div>
          <CardProducts dataCard={soldOut} />
        </div>

        {/* Concerts */}
        <div className="my-[5rem]">
          <div className="bg-[var(--color-section)] py-[1rem] rounded-3xl w-min mx-5">
            <span className="px-20">Concerts</span>
          </div>
          <ShelfConcerts />
        </div>
      </div>
    </>
  );
}
