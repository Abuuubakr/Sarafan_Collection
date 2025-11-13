"use client";
import Card from "./Catalog/Card";
import { Product } from "@/types/product";

type RecommendationsType = {
  collection : Product[];
  tittle : string
}
const Recommendations = ({ collection, tittle }: RecommendationsType) => {
  return (
    <div className="mt-[120px]">
      <p className="text-[25px] text-[#2D2D2D] mb-[30px]">{tittle}</p>
      <div className="overflow-x-auto ">
        <div className="grid grid-cols-4 gap-[30px] w-[1188px] h-[440px]">
          {collection.map((e, i) => (
            <div className="max-w-[270px] h-[420px]">
              <Card
                id={e.id}
                key={i}
                img={e.img}
                name={e.name}
                price={e.price}
                isFavourite={e.isFavourite}
                isOnCart={e.isOnCart}
                amount={e.amount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
