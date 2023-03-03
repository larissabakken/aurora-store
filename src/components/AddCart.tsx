import { useState } from "react";
import { AiOutlineShoppingCart, AiFillShopping } from "react-icons/ai";

// Component to add product to cart
const AddCart = () => {
  // State to keep track of whether product has been added or not
  const [addedCart, setAddedCart] = useState(false);

  // Function to toggle state when button is clicked
  const toggleCart = () => {
    setAddedCart(!addedCart);
  };

  // Return JSX for button with appropriate text and icon depending on state
  return (
    <div
      className="m-2 cursor-pointer text-white bg-[var(--color-primary)] rounded-xl hover:scale-110 hover:text-green-500 transition-colors py-2"
      onClick={toggleCart}
    >
      {addedCart ? (
        <span className="flex justify-center items-center">
          <AiFillShopping size={25} className="mx-1" color="green" /> Added to
          cart!
        </span>
      ) : (
        <span className="flex justify-center items-center">
          <AiOutlineShoppingCart size={25} className="mx-1" /> Add to cart
        </span>
      )}
    </div>
  );
};

export default AddCart;
