"use client";

import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Showcase = () => {
  const [mounted, setMounted] = useState(false);
  const matches = useMediaQuery("(min-width:600px)", { noSsr: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const url = matches ? "/images/Showcase.png" : "/images/Showcase2.png";

  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="bg-center bg-cover w-full h-[954px]"
    >
      <div className="flex  items-center h-full justify-end max-[600px]:justify-center w-[80%] mx-auto">
        <div className="max-w-[390px] text-center min-[600px]:text-white">
          <p className="text-[25px] ">Весна — лето 2022</p>
          <p className=" mt-[30px] font text-[63px] font-medium uppercase font-[Playfair_Display]">
            with love, to you
          </p>
          <Link href={"/Catalog"}>
            <button className="text-[#2D2D2D] py-5 px-[70px] bg-white cursor-pointer">
              Перейти в каталог
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
