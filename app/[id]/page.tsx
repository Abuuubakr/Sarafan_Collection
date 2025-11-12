"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToCart, addToFavourites } from "@/store/reducers/catalogSlice";
import { useRef, useState } from "react";
import Recommendations from "../Recommendations";

const page = () => {
  const { id } = useParams();
  const numId = Number(id);
  const catalog = useSelector((state: RootState) => state.catalog.catalog);
  const dispatch = useDispatch();

  const extraProducts = [catalog[5], catalog[6], catalog[7]];
  const recommendations = [catalog[4], catalog[5], catalog[6], catalog[7]];

  const currentProduct = catalog[numId - 1];

  const { name, price, isFavourite, isOnCart, img, colors } = currentProduct;

  const buttonTittle = !isOnCart ? "Добавить в корзину" : "Убрать из корзины";

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageContext, setMessageContext] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleClick1 = (id: number) => {
    dispatch(addToFavourites(id));
    showMessage(
      !isFavourite ? "Товар добавлен в избранное" : "Товар убран из избранного"
    );
  };

  const handleClick2 = (id: number) => {
    dispatch(addToCart(id));
    showMessage(
      !isOnCart ? "Товар добавлен в корзину" : "Товар убран из корзины"
    );
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center text-[13px] space-x-[5px]">
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Главная</p>{" "}
        </Link>
        <p>/</p>
        <Link href={"/Catalog"}>
          {" "}
          <p className="text-[#2D2D2D]">Каталог</p>{" "}
        </Link>
        <p>/</p>
        <p className="text-[#CECECE]">{name}</p>{" "}
      </div>
      <div className="mt-[30px] flex max-[1280px]:flex-col  justify-between">
        <div className="flex space-x-2.5 max-w-[570px] max-[1280px]:mx-auto  ">
          <div className="space-y-2.5 max-[1280px]:hidden">
            <div className="w-[70px] h-[90px] border-[1.5px] border-[#6F6F6F]">
              <Image src={img} alt="img" className="w-full h-full" />
            </div>
            <div className="w-[70px] h-[90px]">
              <Image src={img} alt="img" className="w-full h-full" />
            </div>
            <div className="w-[70px] h-[90px]">
              <Image src={img} alt="img" className="w-full h-full" />
            </div>
          </div>
          <div className="relative h-full w-full ">
            <button
              className="absolute right-0 bg-transparent cursor-pointer p-3"
              onClick={() => handleClick1(numId)}
            >
              {isFavourite ? (
                <FavoriteIcon className="text-[17px] text-red-500" />
              ) : (
                <FavoriteBorderIcon className="text-[20px] text-white hover:text-red-500" />
              )}
            </button>
            <div className="">
              <Image src={img} alt="img" className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="max-[1280px]:mt-[60px]">
          <div>
            <p className="text-[25px] text-[#2D2D2D]">{name}</p>
            <p className="mt-[5px] text-[14px] text-[#DADADA]">SHR0094</p>
            <p className="mt-[25px] text-[18px] text-[#2D2D2D] font-medium">
              {price}
            </p>
            <p className="mt-5 max-w-[415px]">
              Разнообразный и богатый опыт рамки и место обучения кадров
              способствует подготовки и реализации форм развития. Разнообразный
              и богатый опыт рамки и место обучения кадров способствует
              подготовки и реализации форм развития.
            </p>
          </div>
          {colors ? (
            <div className="mt-10">
              <div>
                <p>Цвет: красный</p>
              </div>
              <div className="mt-2.5 flex space-x-2">
                {colors.map((e, i) => (
                  <div
                    key={i}
                    className="w-10 h-[55px]"
                    style={{ backgroundColor: e }}
                  ></div>
                ))}
              </div>
            </div>
          ) : null}
          <div className="" style={{ marginTop: colors ? "20px" : "40px" }}>
            <select className="cursor-pointer appearance-none w-full text-center border-2 outline-none border-[#CECECE] py-5 pr-5">
              <option
                className="outline-none cursor-pointer pr-[21px]"
                value=""
              >
                Выберите размер
              </option>
              <option className="outline-none cursor-pointer" value="">
                XS
              </option>
              <option className="outline-none cursor-pointer" value="">
                S
              </option>
              <option className="outline-none cursor-pointer" value="">
                M
              </option>
              <option className="outline-none cursor-pointer" value="">
                L
              </option>
            </select>
          </div>
          <div className="mt-10 max-w-full">
            <button
              onClick={() => handleClick2(numId)}
              className="w-full cursor-pointer text-white bg-[#2D2D2D] py-5 "
            >
              {buttonTittle}
            </button>
          </div>
          <div className="mt-[30px] text-[#2D2D2D]">
            <p className="text-[14px]">Доставка, обмен, возврат</p>
            <div className="mt-10 space-y-[23px]">
              <div>
                <div className="flex items-center justify-between">
                  <div>Описание товара</div>
                  <div
                    onClick={() => setOpen1(!open1)}
                    className="text-[20px] cursor-pointer"
                  >
                    +
                  </div>
                </div>
                <div className="mt-5" style={{ display: open1 ? "" : "none" }}>
                  <p className="max-w-[415px]">
                    Разнообразный и богатый опыт рамки и место обучения кадров
                    способствует подготовки и реализации форм развития.
                    Разнообразный и богатый опыт рамки и место обучения кадров
                    способствует подготовки и реализации форм развития.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div>Состав и уход</div>
                  <div
                    onClick={() => setOpen2(!open2)}
                    className="text-[20px] cursor-pointer"
                  >
                    +
                  </div>
                </div>
                <div className="mt-5" style={{ display: open2 ? "" : "none" }}>
                  <p className="max-w-[415px]">
                    Разнообразный и богатый опыт рамки и место обучения кадров
                    способствует подготовки и реализации форм развития.
                    Разнообразный и богатый опыт рамки и место обучения кадров
                    способствует подготовки и реализации форм развития.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <Recommendations collection={extraProducts} tittle="Дополните образ" />
      </div>
      <div className="mt-[120px]">
        <Recommendations
          collection={recommendations}
          tittle="Вам также может понравится"
        />
      </div>
      {message && (
        <div className="fixed top-0 left-0 w-full bg-[#2D2D2D] text-white text-center py-3 z-9999 transition-all duration-500">
          {messageContext}
        </div>
      )}
    </div>
  );
};

export default page;
