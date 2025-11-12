import { StaticImageData } from "next/image";


export type Product = {
  id: number;
  img: StaticImageData;
  name: string;
  price: string;
  colors?: string[];
  isFavourite : boolean;
  isOnCart : boolean;
  amount : number;
  collection? : string
};

