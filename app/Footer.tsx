import Image from "next/image";
import logo from "../public/images/logo3.png";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      tittle: "Помощь",
      links: ["Оплата", "Доставка", "Возврат и обмен"],
    },
    {
      tittle: "Компания",
      links: ["О нас", "Наши магазины", "Контакты"],
    },
    {
      tittle: "Следите за нами",
      links: ["TikTok", "Vk", "Telegram", "Pinterest"],
    },
  ];

  return (
    <div className="flex max-[700px]:flex-col max-[700px]:items-center items-start justify-between border-t border-[#C4C4C4] pt-10 mt-[100px] pb-[93px] max-[700px]:pb-[50px] w-[80%] mx-auto ">
      <div className="min-[700px]:hidden space-y-[33px] flex flex-col items-center">
        <div className="flex items-center space-x-2.5">
          <p>Помощь</p>
          <div>
            <FaChevronDown />
          </div>
        </div>
        <div className="flex items-center space-x-2.5">
          <p>Компания</p>
          <div>
            <FaChevronDown />
          </div>
        </div>
        <div className="flex items-center space-x-[33px]">
          <Link href={""}>
            <p>TikTok</p>
          </Link>
          <Link href={""}>
            <p>VK</p>
          </Link>
          <Link href={""}>
            <p>Telegram</p>
          </Link>
        </div>
      </div>
      <div className="max-[700px]:mt-[35px]">
        <Image src={logo} alt="img"></Image>
      </div>
      <div className="flex  justify-between w-[60%] mt-[30px] max-[700px]:hidden">
        {links.map((e, i) => (
          <div key={i}>
            <p className="text-[#2D2D2D] font-medium text-[18px]">{e.tittle}</p>
            <ul className="text-[#2D2D2D] mt-[30px] space-y-[5px]">
              {e.links.map((e, i) => (
                <li key={i} className="focus:text-[#6F6F6F9E] focus:underline">
                  <Link href={""}>
                    <p className="hover:underline">{e}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
