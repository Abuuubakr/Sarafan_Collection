"use client";

import product5 from "../public/images/product5.jpg";
import product6 from "../public/images/product6.jpg";
import Card from "./Catalog/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Recommendations from "./Recommendations";

const NewCollection = () => {
  const catalog = useSelector((state: RootState) => state.catalog.catalog);

  const collection1 = catalog.filter((e) => e.collection === "collection1");

  const collection2 = catalog.filter((e) => e.collection === "collection2");

  return (
    <div>
      <Recommendations collection={collection1} tittle="Новая коллекция" />
      <div className="mt-[60px] max-[700px]:hidden">
        <div className="flex justify-between">
          {collection2.map((e, i) => (
            <div className="w-[570px] h-[710px] ">
              <Card
                id={e.id}
                key={i}
                img={e.img}
                name={e.name}
                price={e.price}
                isFavourite={e.isFavourite}
                isOnCart={e.isOnCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
