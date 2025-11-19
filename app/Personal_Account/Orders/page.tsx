"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const logedUser = useSelector(
    (state: RootState) => state.logedUser.logedUser
  );

  const orders = logedUser?.orders;

  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let month = (today.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is 0-indexed
  let day = today.getDate().toString().padStart(2, "0");
  let year = today.getFullYear();

  let formattedDate = `${month}.${day}.${year}`;

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center text-[13px] space-x-[5px]">
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Главная</p>{" "}
        </Link>
        <p>/</p>
        <Link href={"/Personal_Account"}>
          {" "}
          <p className="text-[#2D2D2D]">Личный кабинет</p>{" "}
        </Link>
        <p>/</p>
        <p className="text-[#CECECE]">Мои заказы</p>
      </div>
      <div>
        <p className="text-[25px] text-[#2D2D2D]">Мои заказы</p>
      </div>
      <div className="mt-[30px] flex max-[800px]:flex-col-reverse justify-between min-[1000px]:w-[90%]">
        <div className="min-[800px]:w-[55%] max-[800px]:mt-20">
          <div>
            <p className="text-[#2D2D2D]">Мои заказы</p>
          </div>
          <div>
            <div className="mt-10 space-y-10">
              {orders?.map((e, i) => (
                <div key={i} className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[#2D2D2D]">№ 73497CS74</p>
                    </div>
                    <div>
                      <p className="text-[#6E6E6E]">Передан в доставку </p>
                    </div>
                  </div>
                  <div className="mt-5 flex space-x-[15px] w-full overflow-x-auto">
                    {e.order.map((e) => (
                      <div className="w-25 h-[120px]" key={i}>
                        <Image src={e} className="w-full h-full" alt="img" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-[14px] text-[#2D2D2D]">
                      <p>Дата заказа: {formattedDate}</p>
                      <p className="mt-2.5">Стоимость заказа: {e.totalPrice}</p>
                    </div>
                    <div>
                      <button className=" w-full max-w-[170px]  cursor-pointer  text-[14px] text-[#2D2D2D] border border-[#CECECE] py-[15px] px-[45px]">
                        Отследить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="min-[800px]:w-[35%] space-y-5">
          <div>
            <Link href={"/Personal_Account"}>
              {" "}
              <p className="text-[18px] text-[#A6A6A6]">
                Основная информация
              </p>{" "}
            </Link>
          </div>
          <div>
            <p className="text-[18px] text-[#2D2D2D]">Мои заказы</p>{" "}
          </div>
          <div>
            {" "}
            <p className="text-[18px] text-[#A6A6A6]">Выход</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
