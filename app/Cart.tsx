"use client";

import { addToCart, decrement, increment } from "@/store/reducers/catalogSlice";
import { RootState } from "@/store/store";
import { Drawer } from "antd";
import { Badge } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsBag } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
import { Product } from "@/types/product";
import Link from "next/link";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const catalog = useSelector((state: RootState) => state.catalog.catalog);
  const cart = catalog.filter((e) => e.isOnCart === true);
  const cartLength = catalog.filter((e) => e.isOnCart === true).length;

  const [message, setMessage] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showMessage = () => {
    setMessage(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = (id: number) => {
    dispatch(addToCart(id));
    showMessage();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const getTotalPrice = (products: Product[]) => {
    let totalPrice = 0;

    products.map((e) => {
      const priceNum = parseInt(e.price.replace(/\s|руб\.?/g, ""));
      totalPrice += priceNum * e.amount;
    });

    return totalPrice;
  };

  const cartTotalPrice = getTotalPrice(cart);

  return (
    <>
      <div className="max-[1290px]:mr-[19px]">
        <Badge
          badgeContent={cartLength}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: grey[900],
              color: "#fff",
            },
          }}
        >
          <div
            className="hover:text-black cursor-pointer"
            onClick={toggleDrawer}
          >
            <BsBag />
          </div>
        </Badge>
      </div>

      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        open={open}
        width="690px"
        styles={{
          header: {
            borderBottom: "none",
          },
        }}
      >
        <div>
          <div className="flex justify-end">
            <button
              onClick={toggleDrawer}
              className="text-[15px] text-[#2D2D2D] cursor-pointer mb-[30px]"
            >
              <CgClose />
            </button>
          </div>
          <div className="font-[Montserrat]">
            <p className="text-[25px] text-[#2D2D2D]">Моя корзина</p>
            <div className="mt-10 space-y-10">
              {cart.map((e, i) => (
                <div key={i} className="flex space-x-5 max-w-[500px]">
                  <div className="w-[40%] ">
                    <Image
                      src={e.img}
                      className="h-full w-full"
                      alt="img"
                    ></Image>
                  </div>
                  <div className="text-[#2D2D2D] w-[60%]">
                    <p className="text-[20px]">{e.name}</p>
                    <p className="mt-1.5 font-medium">{e.price}</p>
                    <div className="mt-[5px] space-y-5 text-[15px]">
                      <div className="flex items-center justify-between ">
                        <div>Размер</div>
                        <div>
                          <select className="cursor-pointer border-2 outline-none border-[#CECECE] py-[5px] px-2.5">
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div>Количество</div>
                        <div className="flex items-center space-x-2.5">
                          <div>
                            <button
                              onClick={() => dispatch(increment(e))}
                              className="cursor-pointer text-[20px]"
                            >
                              +
                            </button>
                          </div>
                          <div>{e.amount}</div>
                          <div>
                            <button
                              onClick={() => dispatch(decrement(e))}
                              className="cursor-pointer text-[20px]"
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div>Цвет</div>
                        <div>
                          <p>Белый</p>
                        </div>
                      </div>
                      <div
                        className="text-[#6F6F6F] flex items-center space-x-2.5 cursor-pointer"
                        onClick={() => handleClick(e.id)}
                      >
                        <div className="text-[20px]">
                          <RiDeleteBinLine />
                        </div>
                        <div className="underline">Удалить</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cart.length !== 0 ? (
              <div className="mt-[60px] mx-auto text-center">
                <div className="text-[18px] text-[#2D2D2D] flex justify-center items-center space-x-2.5">
                  <div>
                    <p>Стоимость товара(-ов):</p>
                  </div>
                  <div>
                    <p>{`${cartTotalPrice.toLocaleString("ru-Ru")} руб`}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <Link href={""}>
                    <button className="w-full max-w-[370px] cursor-pointer text-[#2D2D2D] border-2 border-[#CECECE]  py-5 ">
                      <p>Перейти к оформлению</p>
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Drawer>

      {message && (
        <div className="fixed top-0 left-0 w-full bg-[#2D2D2D] text-white text-center text-[16px] py-3 z-9999 transition-all duration-500">
          Товар убран из корзины
        </div>
      )}
    </>
  );
};

export default Cart;
