import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoriteButton = () => {
  // Use destructuring assignment to initialize the state with false
  const [isFavorited, setIsFavorited] = useState(false);

  // Create a function to toggle the favorite state
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    // Use descriptive class names and wrap the icon in a button element
    <button
      className="flex items-center justify-center w-8 h-8 cursor-pointer"
      onClick={toggleFavorite}
    >
      {/* Use the ternary operator to conditionally render the icon */}
      {isFavorited ? (
        <AiFillHeart size={30} color="red" />
      ) : (
        <AiOutlineHeart
          size={30}
          className="text-white hover:text-red-500 hover:scale-110 transition-colors"
        />
      )}
    </button>
  );
};

export default FavoriteButton;
