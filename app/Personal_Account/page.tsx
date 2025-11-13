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
      <div className="mt-[30px] flex justify-between">
        <div className="w-[55%]">
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
          </form>
        </div>
        <div className="w-[35%] space-y-5">
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
