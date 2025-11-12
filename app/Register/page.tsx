import React from "react";

const page = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center mt-[75px] mb-25">
        <form className="w-full" action="">
          <div className="text-center text-[25px] text-[#2D2D2D]">
            Регистрация
          </div>
          <div className="mt-10 w-full max-w-[440px] mx-auto">
            <div className="space-y-10 flex flex-col w-full">
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="text"
                placeholder="Введите E-mail"
              />
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="text"
                placeholder="Введите пароль"
              />
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="text"
                placeholder="Подтвердите пароль"
              />
            </div>
            <div className="mt-[30px] flex items-center space-x-3">
              <input className="w-5 h-5 cursor-pointer" type="checkbox" />
              <p className="max-w-[340px] text-[14px]  text-[#2D2D2D]">
                Я согласен с политикой конфиденциальности и с обработкой
                персональных данных
              </p>
            </div>
            <div className="mt-[30px] flex justify-center">
              <button
                // onClick={() => handleClick2(numId)}
                className="w-full max-w-[370px] cursor-pointer text-white bg-[#2D2D2D] py-5 "
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
