"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/images/logo2.png";
import Image from "next/image";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AutoComplete, Drawer } from "antd";
import product9 from "../public/images/product9.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Product } from "@/types/product";
import { setSearchValue } from "@/store/reducers/SearcSlice";
import { CloseSquareFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Badge } from "@mui/material";
import { grey } from "@mui/material/colors";
import Cart from "./Cart";

const Header = () => {
  const tabs = [
    {
      name: "Новинки",
      link: "",
    },
    {
      name: "Одежда",
      link: "",
    },
    {
      name: "Аксессуары",
      link: "",
    },
    {
      name: "SALE",
      link: "",
    },
  ];

  const categories1 = [
    "Платья",
    "Пальто и тренчи",
    "Пуховики",
    "Куртки и жилеты",
    "Деним",
    "Блузы и топы",
    "Брюки",
    "Юбки",
  ];
  const categories2 = [
    "Рубашки",
    "Футболки",
    "Свитеры",
    "Толстовки",
    "Комплекты",
    "Комбинезоны",
    "Шорты",
    "Купальники",
  ];

  const [open, setOpen] = useState(false);
  const catalog = useSelector((state: RootState) => state.catalog.catalog);

  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";
  const isCatalog = pathname === "/Catalog";

  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );

  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(!open);
  };

  const headerHeight = 97;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const catalog1 = useSelector((state: RootState) => state.catalog.catalog);
  const favouritesLength = catalog1.filter(
    (e) => e.isFavourite === true
  ).length;

  const getNames = (array: Product[]) => {
    return array.map((e) => ({ value: e.name }));
  };

  const productNames = getNames(catalog);

  const onSelect = (data: string) => {
    dispatch(setSearchValue(data));
    !isCatalog ? router.push("/Catalog") : null;
  };

  return (
    <div
      className={`bg-white min-[600px]:bg-transparent w-full ${
        isHome ? "min-[600px]:absolute" : ""
      }`}
    >
      <div className="max-[600px]:w-[90%] w-[80%] pt-5 pb-[25px]  font-[Montserrat] flex items-center mx-auto justify-between   ">
        <div
          className="text-[30px] min-[1290px]:hidden w-20"
          onClick={showDrawer}
        >
          <FaBars />
        </div>
        <div className="max-[1290px]:hidden">
          <ul className="flex space-x-[45px]">
            {tabs.map((e, i) => (
              <li
                key={i}
                className="hover:border-b border-[#505050] py-5"
                onClick={showDrawer}
              >
                <Link href={e.link}>
                  <p>{e.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-[1290px]:w-[155px]">
          <Link href={"/"}>
            <Image src={logo} alt="img"></Image>
          </Link>
        </div>
        <div className="flex items-center space-x-[71px] max-[1290px]:w-20">
          <div className="max-[1290px]:hidden flex items-center space-x-[5px] text-[#DADADA] pl-[11px] pb-1.5 border-b border-[#DADADA] focus:border-black">
            <div>
              <BiSearch />
            </div>
            <div>
              <AutoComplete
                options={productNames}
                value={searchValue}
                style={{ width: 200 }}
                onSelect={onSelect}
                placeholder="Поиск"
                variant="borderless"
                onSearch={(text) => dispatch(setSearchValue(text))}
                allowClear={{ clearIcon: <CloseSquareFilled /> }}
                filterOption={(inputValue, option) =>
                  option!
                    .value!.toLowerCase()
                    .includes(inputValue.toLowerCase().trim())
                }
              />
            </div>
          </div>
          <div className="flex items-center min-[1290px]:space-x-[19px] text-[#CECECE] text-[24px]">
            <div className="max-[1290px]:hidden">
              <Link href={"/Favourites"}>
                <Badge
                  badgeContent={favouritesLength}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: grey[900],
                      color: "#fff",
                    },
                  }}
                >
                  <div className="hover:text-black cursor-pointer">
                    <BiHeart />
                  </div>
                </Badge>
              </Link>
            </div>
            <Cart />
            <Link href={""}>
              <div className="hover:text-black cursor-pointer">
                <BiUser />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Drawer
        placement="top"
        closable={false}
        open={open}
        mask={false}
        maskClosable={false}
        height={`calc(100vh - ${headerHeight}px)`}
        styles={{
          wrapper: { top: headerHeight },
          body: { background: "#FBFBFA" },
        }}
      >
        <div className="w-[80%] mx-auto font-[Montserrat]">
          <div className="flex justify-between">
            <div className="flex max-[440px]:flex-col justify-between w-[80%] min-[900px]:w-[40%] max-[500px]:w-full">
              <div>
                <ul>
                  {categories1.map((e, i) => (
                    <li key={i} className="py-2.5 ">
                      <a href="#">
                        <p className="text-[#2D2D2D] hover:underline">{e}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {categories2.map((e, i) => (
                    <li key={i} className="py-2.5 ">
                      <a href="#">
                        <p className="text-[#2D2D2D] hover:underline">{e}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[40%] max-[900px]:hidden">
              <Image className="h-[600px]" src={product9} alt="img" />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
