"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { loginUser } from "@/store/reducers/logedUserSlice";

const page = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoged, setIsLoged] = useState<Boolean | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    const user = users.find(
      (e) => e.email === email && e.password === password
    );

    if (user) {
      router.push("/Personal_Account");
      setIsLoged(true);
      dispatch(loginUser(user))
    } else setIsLoged(false);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center mt-[75px] ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="text-center text-[25px] text-[#2D2D2D]">Вход</div>
          <div className="mt-10 w-full max-w-[440px] mx-auto">
            <div className="space-y-10 flex flex-col w-full">
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="email"
                name="email"
                placeholder="Введите E-mail"
              />
              <input
                className="w-full outline-none pb-2.5 border-b border-[#DADADA]"
                type="password"
                name="password"
                placeholder="Введите пароль"
              />
            </div>
            <div
              className="my-2.5 text-center"
              style={{
                display: isLoged || isLoged === null ? "none" : "",
              }}
            >
              <p className="text-[13px] text-[#C21414]">
                Неверный адрес электронной почты или пароль.
              </p>
            </div>
            <div className="mt-[50px] flex justify-center">
              <button
                type="submit"
                className="w-full max-w-[370px] cursor-pointer text-white bg-[#2D2D2D] py-5 "
              >
                Войти
              </button>
            </div>
            <div className="mt-5 text-center flex justify-center">
              <div className="flex space-x-2.5">
                <Link href={"/Personal_Account/Register"}>
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
