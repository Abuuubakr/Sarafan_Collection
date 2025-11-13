import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center mt-[75px] ">
        <form className="w-full" action="">
          <div className="text-center text-[25px] text-[#2D2D2D]">Вход</div>
          <div className="mt-10 w-full max-w-[440px] mx-auto">
            <div className="space-y-10 flex flex-col w-full">
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="text"
                placeholder="Введите E-mail"
              />
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="password"
                placeholder="Введите пароль"
              />
            </div>

            <div className="mt-[50px] flex justify-center">
              <button
                // onClick={() => handleClick2(numId)}
                className="w-full max-w-[370px] cursor-pointer text-white bg-[#2D2D2D] py-5 "
              >
                Войти
              </button>
            </div>
            <div className="mt-5 text-center flex justify-center">
              <div className="flex space-x-2.5">
                <Link href={""}>
                  {" "}
                  <p>Регистрация</p>{" "}
                </Link>
                <p>/</p>
                <Link href={""}>
                  {" "}
                  <p>Забыли пароль?</p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
