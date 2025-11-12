"use client";

import Link from "next/link";
import Card from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import CatalogFilter from "../CatalogFilter";

const Catalog = () => {
  const catalog = useSelector((state: RootState) => state.catalog.catalog);
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );

  const [sortValue, setSortValue] = useState("default");

  const handleSrotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortValue(value);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center text-[13px] space-x-[5px]">
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Главная</p>{" "}
        </Link>
        <p>/</p>
        <p className="text-[#CECECE]">Платья</p>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <div>
          <p className="text-[25px] text-[#2D2D2D]">Платья</p>
        </div>
        <div className="flex justify-between items-center space-x-[50px]">
          <div>
            <select
              value={sortValue}
              onChange={handleSrotChange}
              className="outline-none  max-w-[200px] cursor-pointer"
            >
              <option
                className="hover:bg-[#E5E5E5]"
                value="default"
                hidden
                disabled
              >
                Сортировка
              </option>
              <option value="new">Новинки</option>
              <option value="toHighest">По возрастанию цены</option>
              <option value="toLowest">По убыванию цены</option>
            </select>
          </div>
          <div>
            <CatalogFilter/>
          </div>
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-3 max-[1100px]:grid-cols-2 max-[840px]:grid-cols-1 gap-[50px] ">
        {catalog
          .filter((e) =>
            searchValue
              ? e.name
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              : true
          )
          .sort((a, b) => {
            const priceA = parseInt(a.price.replace(/\s|руб\.?/g, ""));
            const priceB = parseInt(b.price.replace(/\s|руб\.?/g, ""));

            if (sortValue === "default") return 0;
            if (sortValue === "toHighest") return priceA - priceB;
            else return priceB - priceA;
          })
          .map((e, i) => (
            <div className="max-w-[470px] h-[590px]" key={i}>
              <Card
                id={e.id}
                img={e.img}
                name={e.name}
                price={e.price}
                colors={e.colors}
                isFavourite={e.isFavourite}
                isOnCart={e.isOnCart}
                amount={e.amount}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Catalog;
