import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HeartIcon = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className="flex items-center justify-center w-8 h-8 cursor-pointer"
      onClick={toggleFavorite}
    >
      {isFavorited ? (
        <AiFillHeart size={30} color="red" />
      ) : (
        <AiOutlineHeart
          size={30}
          className="text-white hover:text-red-500 hover:scale-110 transition-colors"
        />
      )}
    </div>
  );
};

export default HeartIcon;
