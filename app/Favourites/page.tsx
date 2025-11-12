"use client";

import Link from "next/link";
import Card from "../Catalog/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Favourites = () => {
    
  const catalog = useSelector((state: RootState) => state.catalog.catalog);

  const favourites = catalog.filter((e) => e.isFavourite === true);

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center text-[13px] space-x-[5px]">
        <Link href={"/"}>
          {" "}
          <p className="text-[#2D2D2D]">Главная</p>{" "}
        </Link>
        <p>/</p>
        <p className="text-[#CECECE]">Избранное</p>
      </div>
      <div>
        <div>
          <p className="text-[25px] text-[#2D2D2D]">Избранное</p>
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[50px] ">
        {favourites.map((e, i) => (
          <Card
            key={i}
            id={e.id}
            img={e.img}
            name={e.name}
            price={e.price}
            colors={e.colors}
            isFavourite={e.isFavourite}
            isOnCart={e.isOnCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
