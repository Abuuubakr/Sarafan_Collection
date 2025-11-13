import Link from "next/link";
import React from "react";

const page = () => {
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

  const inputs2 = [
    {
      name: "current",
      placeholder: "Текущий пароль",
      type: "text",
    },
    {
      name: "new",
      placeholder: "Новый пароль",
      type: "text",
    },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center text-[13px] space-x-[5px]">
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Главная</p>{" "}
        </Link>
        <p>/</p>
        <p className="text-[#CECECE]">Личный кабинет</p>
      </div>
      <div>
        <p className="text-[25px] text-[#2D2D2D]">Личный кабинет</p>
      </div>
      <div className="mt-[30px] flex max-[800px]:flex-col-reverse justify-between min-[1000px]:w-[90%]">
        <div className="min-[800px]:w-[55%] max-[800px]:mt-20">
          <div>
            <p className="text-[18px] text-[#2D2D2D]">Данные аккаунта</p>
          </div>
          <form className="mt-10 w-full">
            <div className="space-y-10 flex flex-col w-full">
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
                className="w-full max-w-[370px] cursor-pointer text-[#2D2D2D] py-5 border border-[#CECECE]"
              >
                Сохранить
              </button>
            </div>
          </form>
          <div className="mt-20">
            <p className="text-[18px] text-[#2D2D2D]">Смена пароля</p>
          </div>
          <form className="mt-10 w-full">
            <div className="space-y-10 flex flex-col w-full">
              {inputs2.map((e, i) => (
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
                className="w-full max-w-[370px] cursor-pointer text-[#2D2D2D] py-5 border border-[#CECECE]"
              >
                Изменить пароль
              </button>
            </div>
          </form>
          <div className="mt-20 text-[#2D2D2D]">
            <div>
              <p>Уведомления</p>
            </div>
            <div className="flex items-center space-x-2.5 mt-[35px]">
              <div>
                <input type="checkbox" checked className="h-[22px] w-[22px]" />
              </div>
              <div>
                <p className="text-[14px] max-w-85">
                  Я хочу получать рассылку электронных новостей шоурума
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-[800px]:w-[35%] space-y-5">
          <div>
            <Link href={""}>
              {" "}
              <p className="text-[18px] text-[#2D2D2D]">
                Основная информация
              </p>{" "}
            </Link>
          </div>
          <div>
            <Link href={"/Personal_Account/Orders"}>
              {" "}
              <p className="text-[18px] text-[#A6A6A6]">Мои заказы</p>{" "}
            </Link>
          </div>
          <div>
            <Link href={""}>
              {" "}
              <p className="text-[18px] text-[#A6A6A6]">Выход</p>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
