import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/product";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "@/store/reducers/catalogSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRef, useState } from "react";

const Card = ({ img, name, price, colors, isFavourite, id }: Product) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState(false);
  const [messageContext, setMessageContext] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (id: number) => {
    dispatch(addToFavourites(id));
    showMessage(
      !isFavourite ? "Товар добавлен в избранное" : "Товар убран из избранного"
    );
  };

  const showMessage = (text: string) => {
    setMessage(true);
    setMessageContext(text);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  return (
    <div className="cursor-pointer relative w-full h-full mx-auto">
      <button
        className="absolute  right-0 bg-transparent cursor-pointer p-3"
        onClick={() => handleClick(id)}
      >
        {isFavourite ? (
          <FavoriteIcon className="text-[17px] text-red-500" />
        ) : (
          <FavoriteBorderIcon className="text-[20px] text-white hover:text-red-500" />
        )}
      </button>
      <div className="w-full h-[85%]">
        <Link href={`/${id}`}>
          <div className="w-full h-full">
            <Image src={img} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="mt-5 space-y-2 text-[#2D2D2D]">
            <p>{name}</p>
            <p className="text-[15px]">{price}</p>
            {colors ? (
              <div className="flex space-x-2.5">
                {colors.map((e) => (
                  <div
                    className="w-[22px] h-[22px] rounded-[50%]"
                    style={{ backgroundColor: e }}
                  ></div>
                ))}
              </div>
            ) : null}
          </div>
        </Link>
      </div>
      {message && (
        <div className="fixed top-0 left-0 w-full bg-[#2D2D2D] text-white text-center py-3 z-9999 transition-all duration-500">
          {messageContext}
        </div>
      )}
    </div>
  );
};

export default Card;
