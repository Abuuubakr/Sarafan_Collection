"use client";

import Showcase from "./Showcase";
import NewCollection from "./NewCollection";
import Spring from "./Spring";
import Recommendations from "./Recommendations";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {

  const catalog = useSelector((state: RootState) => state.catalog.catalog);

  const collection1 = catalog.filter((e) => e.collection === "collection1");

  return (
    <div>
      <Showcase />
      <div className="w-[80%] mx-auto">
        <NewCollection />
        <Spring />
        <Recommendations collection={collection1} tittle="Успей купить"/>
      </div>
    </div>
  );
}
