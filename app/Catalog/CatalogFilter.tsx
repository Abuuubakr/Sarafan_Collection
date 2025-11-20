import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { IoAdd } from "react-icons/io5";

type selectedFiltersType = {
  colors: string[];
};

type CatalogFilterProps = {
  selectedFilters: selectedFiltersType;
  setSelectedFilters: React.Dispatch<React.SetStateAction<selectedFiltersType>>;
};

const CatalogFilter = ({
  selectedFilters,
  setSelectedFilters,
}: CatalogFilterProps) => {
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState<number[]>([]);

  const colors = ["#CEB9AD", "#C21414", "#2D2D2D", "#063F38"];
 

  const handleClick = (color: string) => {
    setSelectedFilters((prev) => ({
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const filters = [
    {
      id: 1,
      tittle: "Цвет",
      content: (
        <div className="mt-2.5 flex space-x-2 ">
          {colors.map((e, i) => (
            <div
              key={i}
              className={`w-10 h-[55px] ${
                selectedFilters?.colors.includes(e) ? "border-2" : ""
              } hover:border-2 border-black cursor-pointer `}
              onClick={() => handleClick(e)}
              style={{ backgroundColor: e }}
            ></div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      tittle: "Характеристики",
      content: (
        <>
          <p>Characteristics</p>
        </>
      ),
    },
    {
      id: 3,
      tittle: "Тип изделия",
      content: (
        <>
          <p>Type</p>
        </>
      ),
    },
    {
      id: 4,
      tittle: "Размер",
      content: (
        <>
          <p>Size</p>
        </>
      ),
    },
    {
      id: 5,
      tittle: "Материалы",
      content: (
        <>
          <p>Materials</p>
        </>
      ),
    },
  ];

  const toggleFilterOpen = (id: number) => {
    setFilterOpen((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

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

  return (
    <>
      <button className="cursor-pointer" onClick={toggleDrawer}>
        <p className="text-[14px] text-[#2D2D2D]">Фильтр</p>
      </button>

      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        open={open}
        width="680px"
        styles={{
          header: {
            borderBottom: "none",
          },
        }}
      >
        <div>
          <div className="flex justify-end">
            <button
              onClick={toggleDrawer}
              className="text-[15px] text-[#2D2D2D] cursor-pointer mb-[30px]"
            >
              <CgClose />
            </button>
          </div>
        </div>

        <div className="font-[Montserrat] pl-[60px]">
          <div className="space-y-6 w-full max-w-[85%]">
            {filters.map((e, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[18px]">{e.tittle}</p>
                  </div>
                  <div
                    onClick={() => toggleFilterOpen(e.id)}
                    className=" cursor-pointer"
                  >
                    <p className="text-[30px]">
                      {filterOpen.includes(e.id) ? <BiMinus /> : <IoAdd />}
                    </p>
                  </div>
                </div>
                <div
                  className="mt-5"
                  style={{ display: filterOpen.includes(e.id) ? "" : "none" }}
                >
                  {e.content}
                </div>
              </div>
            ))}
          </div>
          <div className="fixed bottom-[100px] w-full">
            <button
              // onClick={() => handleClick2(numId)}
              className="w-full max-w-[370px] cursor-pointer text-white bg-[#2D2D2D] py-5 "
            >
              Показать результаты
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CatalogFilter;
