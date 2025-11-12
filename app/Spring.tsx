import React from "react";
import product7 from '../public/images/product7.png'
import product8 from '../public/images/product8.png'
import Image from "next/image";

const Spring = () => {
  return (
    <div className="mt-[120px]">
      <div className="flex max-[1000px]:flex-col justify-between min-[1000px]:w-[70%] ">
        <div>
          <p className="text-[25px] text-[#2D2D2D] mb-[30px] max-[1000px]:text-center">
            Вдохновленные весной
          </p>
        </div>
        <div className="w-full mb-[25px] min-[1000px]:hidden "><Image  src={product7} alt="img"/></div>
        <div className="max-w-[370px] mx-auto">
          <p className="text-[#2D2D2D] ">
            Разнообразный и богатый опыт рамки и место обучения кадров
            способствует подготовки и реализации форм развития. С другой стороны
            реализация намеченных плановых{" "}
          </p>
          <div className="mt-5">
            <a href="#">
              <p className="text-[#6F6F6F] underline">О бренде</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[60px] flex min-[1000px]:space-x-[30px] max-[1000px]:hidden">
        <div className="max-[1000px]:w-full"><Image src={product7} alt="img"/></div>
        <div className=""><Image src={product8} alt="img"/></div>
      </div>
    </div>
  );
};

export default Spring;
