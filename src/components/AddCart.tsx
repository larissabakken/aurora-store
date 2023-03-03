import { useState } from "react";
import { AiOutlineShoppingCart, AiFillShopping } from "react-icons/ai";

const AddCart = () => {
  const [addedCart, setaddedCart] = useState(false);

  const toggleCart = () => {
    setaddedCart(!addedCart);
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer text-white bg-[var(--color-primary)] rounded-xl hover:scale-110 hover:text-green-500 transition-colors py-2"
      onClick={toggleCart}
    >
      {addedCart ? (
        <span className="flex justify-center items-cente">
          <AiFillShopping size={25} className="mx-2" color="green"/> Added to cart!
        </span>
      ) : (
        <span className="flex justify-center items-center">
          <AiOutlineShoppingCart size={25} className="mx-2"/> Add to cart
        </span>
      )}
    </div>
  );
};

export default AddCart;
