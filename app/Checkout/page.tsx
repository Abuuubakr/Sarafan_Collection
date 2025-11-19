"use client";

import { addToCart } from "@/store/reducers/catalogSlice";
import { checkoutOrders } from "@/store/reducers/logedUserSlice";
import { RootState } from "@/store/store";
import { Product } from "@/types/product";
import { Order } from "@/types/user";
import { Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const catalog = useSelector((state: RootState) => state.catalog.catalog);
  const cart = catalog.filter((e) => e.isOnCart === true);
  const dispatch = useDispatch();
  // const logedUser = useSelector(
  //   (state: RootState) => state.logedUser.logedUser
  // );

  type Bill = {
    tittle: string;
    price: number;
  };

  const getTotalPrice = (products: Product[]) => {
    let totalPrice = 0;

    products.map((e) => {
      const priceNum = parseInt(e.price.replace(/\s|руб\.?/g, ""));
      totalPrice += priceNum * e.amount;
    });

    return totalPrice;
  };

  const totalPrice = getTotalPrice(cart);

  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
  const [selectedMethod2, setSelectedMethod2] = useState<number | null>(null);

  const deliveryMethods = [
    {
      id: 1,
      tiitle: "Самовывоз",
      price: "Бесплатно",
    },
    {
      id: 2,
      tiitle: "Доставка курьером",
      price: "от 300 руб.",
    },
    {
      id: 3,
      tiitle: "Доставка курьером СДЭК",
      price: "от 300 руб.",
    },
    {
      id: 4,
      tiitle: "Самовывоз СДЭК",
      price: "от 200 руб.",
    },
    {
      id: 5,
      tiitle: "Почта",
      price: "от 200 руб.",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      tiitle: "Online оплата картой",
    },
    {
      id: 2,
      tiitle: "Оплата наличными при получении",
    },
  ];

  const inputs = [
    {
      name: "surname",
      placeholder: "Фамилия",
      type: "text",
    },
    {
      name: "name",
      placeholder: "Имя",
      type: "text",
    },
    {
      name: "fathersName",
      placeholder: "Отчество",
      type: "text",
    },
    {
      name: "phone",
      placeholder: "Телефон",
      type: "number",
    },
    {
      name: "email",
      placeholder: "E-mail",
      type: "email",
    },
  ];

  const bill = [
    {
      tittle: "Общая стоимость",
      price: totalPrice,
    },
    {
      tittle: "Размер скидки",
      price: 750,
    },
    {
      tittle: "Доставка",
      price: 0,
    },
    {
      tittle: "Промокод",
      price: 0,
    },
  ];

  const getFinalPrice = (Bill: Bill[]) => {
    let finalPrice = 0;
    Bill.map((e) => {
      finalPrice += e.price;
    });
    return finalPrice;
  };

  const finalPrice = getFinalPrice(bill);

  // if(logedUser === null) router.push('/Personal_Account/Login')

  const cartPictures = cart.map((e) => e.img);
  console.log(cartPictures);

  const handleCLick = () => {
    const newOrder : Order = {
      order : cartPictures,
      totalPrice : finalPrice
    }
    dispatch(checkoutOrders(newOrder))
    cart.map((e) => {
      dispatch(addToCart(e.id))
    })
    router.push('/Personal_Account/Orders')
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center text-[13px] space-x-[5px]">
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Главная</p>{" "}
        </Link>
        <p>/</p>
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Корзина</p>{" "}
        </Link>
        <p>/</p>
        <p className="text-[#CECECE]">Оформление заказа</p>
      </div>
      <div>
        <p className="text-[25px] text-[#2D2D2D]">Оформление заказа</p>
      </div>
      <div className="flex max-[760px]:flex-col-reverse justify-between mt-10">
        <div className="min-[760px]:w-[50%]">
          <div>
            <div>
              <p className="text-[18px] text-[#2D2D2D]">Способ доставки</p>
            </div>
            <div className="mt-9 space-y-5 w-full">
              {deliveryMethods.map((e, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-1"
                  onClick={() => setSelectedMethod(e.id)}
                >
                  <div className="flex space-x-[27px] items-center">
                    <div className="w-5 h-5">
                      <input
                        className="w-full h-full cursor-pointer"
                        type="checkbox"
                        checked={selectedMethod === e.id}
                        onChange={() => setSelectedMethod(e.id)}
                      />
                    </div>
                    <div>
                      <p className="text-[#2D2D2D] leading-none">{e.tiitle}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#6F6F6F] leading-none">
                      {e.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <div>
              <p className="text-[18px] text-[#2D2D2D]">Способ доставки</p>
            </div>
            <div className="mt-9 space-y-5 w-full">
              {paymentMethods.map((e, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-1"
                  onClick={() => setSelectedMethod2(e.id)}
                >
                  <div className="flex space-x-[27px] items-center">
                    <div className="w-5 h-5">
                      <input
                        className="w-full h-full cursor-pointer"
                        type="checkbox"
                        checked={selectedMethod2 === e.id}
                        onChange={() => setSelectedMethod2(e.id)}
                      />
                    </div>
                    <div>
                      <p className="text-[#2D2D2D] leading-none">{e.tiitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20">
            <div>
              <p className="text-[18px] text-[#2D2D2D]">Контактные данные</p>
            </div>
            <div className="mt-[30px] space-y-10 flex flex-col w-full">
              {inputs.map((e, i) => (
                <input
                  className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                  key={i}
                  type={e.type}
                  name={e.name}
                  placeholder={e.placeholder}
                  required
                />
              ))}
            </div>
            <div className="mt-10">
              <button
                type="submit"
                onClick={handleCLick}
                className="w-full max-w-[370px] cursor-pointer text-white bg-[#2D2D2D] py-5"
              >
                Оплатить
              </button>
              <p className="mt-[21px] text-[#6F6F6F] text-[14px] max-w-[370px] leading-[15px]">
                Нажимая на кнопку «оплатить», я принимаю условия{" "}
                <span className="underline">публичной оферты</span> и{" "}
                <span className="underline">политики конфиденциальности</span>
              </p>
            </div>
          </div>
        </div>
        <div className="min-[760px]:w-[40%] text-[#2D2D2D]">
          <div className="space-y-5">
            {bill.map((e, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <p>{e.tittle}</p>
                </div>
                <div>
                  <p>{`${e.price.toLocaleString("ru-Ru")} руб`}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="my-[30px] w-full border-b-2 border-[#DADADA]"></div>
            <div className="flex justify-between">
              <div>
                <p>Итого</p>
              </div>
              <div>
                <p>{`${finalPrice.toLocaleString("ru-Ru")} руб`}</p>
              </div>
            </div>
            <div className="my-[30px] w-full border-b-2 border-[#DADADA]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
