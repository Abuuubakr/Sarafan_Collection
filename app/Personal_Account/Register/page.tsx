"use client";
import { addNewUser } from "@/store/reducers/usersSlice";
import { User } from "@/types/user";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const [isConfirmed, setIsConfirmed] = useState<Boolean | null>(true);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setIsConfirmed(false);
      return;
    }
    setIsConfirmed(true);

    const newUser: User = {
      email: email,
      password: password,
    };

    dispatch(addNewUser(newUser));
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center mt-[75px] max-md:mt-10 max-sm:mt-5 mb-25">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="text-center text-[25px] text-[#2D2D2D]">
            Регистрация
          </div>
          <div className="mt-10 w-full max-w-[440px] mx-auto">
            <div className="space-y-10 flex flex-col w-full">
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="email"
                name="email"
                placeholder="Введите E-mail"
                required
              />
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="password"
                name="password"
                placeholder="Введите пароль"
                required
              />
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="password"
                name="confirm"
                placeholder="Подтвердите пароль"
                required
              />
            </div>
            <div
              className="my-2.5 text-center"
              style={{ display: !isConfirmed ? "" : "none" }}
            >
              <p className="text-[13px] text-[#C21414]">
                Не удалось подтвердить пароль.
              </p>
            </div>
            <div className="mt-[30px] flex items-center space-x-3">
              <input
                className="w-5 h-5 cursor-pointer"
                type="checkbox"
                required
              />
              <p className="max-w-[340px] text-[14px]  text-[#2D2D2D]">
                Я согласен с политикой конфиденциальности и с обработкой
                персональных данных
              </p>
            </div>
            <div className="mt-[30px] flex justify-center">
              <button
                type="submit"
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
