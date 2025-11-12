import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import product1 from "../../public/images/product1.jpg";
import product2 from "../../public/images/product2.jpg";
import product3 from "../../public/images/product3.jpg";
import product4 from "../../public/images/product4.jpg";
import product5 from "../../public/images/product5.jpg";
import product6 from "../../public/images/product6.jpg";
import product10 from "../../public/images/product10.jpg";
import product11 from "../../public/images/product11.jpg";
import product12 from "../../public/images/product12.jpg";
import product13 from "../../public/images/product13.jpg";

interface CatalogState {
  catalog: Product[];
}

const initialState: CatalogState = {
  catalog: [
    {
      id: 1,
      img: product10,
      name: "Комбинезон с открытой спиной",
      price: "9 999 руб.",
      colors: ["#CEB9AD", "#C21414", "#2D2D2D"],
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 2,
      img: product11,
      name: "Платье в полоску с запахом",
      price: "6 999 руб.",
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 3,
      img: product12,
      name: "Платье в полоску с запахом",
      price: "6 999 руб.",
      colors: ["#063F38", "#2D2D2D"],
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 4,
      img: product13,
      name: "Платье в полоску с запахом",
      price: "6 999 руб.",
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 5,
      img: product1,
      name: "Платье в полоску с запахом",
      price: "6 999 руб.",
      collection : 'collection1',
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 6,
      img: product2,
      name: "Объемный пиджак",
      price: "12 499 руб.",
      collection : 'collection1',
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 7,
      img: product3,
      name: "Комбинезон с принтом",
      price: "6 999 руб.",
      collection : 'collection1',
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 8,
      img: product4,
      name: "Атласный топ-комбинация",
      price: "2 799 руб.",
      collection : 'collection1',
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 9,
      img: product5,
      name: "Блейзер с декоративными пуговицами",
      price: "9 999 руб.",
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
    {
      id: 10,
      img: product6,
      name: "Блейзер с декоративными пуговицами",
      price: "9 999 руб.",
      isFavourite: false,
      isOnCart: false,
      amount: 1,
    },
  ],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const { payload } = action;
      const product = state.catalog.find((item) => item.id === payload);
      if (product) {
        product.isFavourite = !product.isFavourite;
      }
    },
    addToCart: (state, action) => {
      const { payload } = action;
      const product = state.catalog.find((item) => item.id === payload);
      if (product) {
        product.isOnCart = !product.isOnCart;
      }
    },

    increment: (state, action) => {
      const { payload } = action;
      const product = state.catalog.find((item) => item.id === payload);
      if (product) {
        product.amount++;
      }
    },

    decrement: (state, action) => {
      const { payload } = action;
      const product = state.catalog.find((item) => item.id === payload);
      if (product && product.amount > 1) {
        product.amount--;
      }
    },
  },
});

export const { addToFavourites, addToCart, increment, decrement } = catalogSlice.actions;
export default catalogSlice.reducer;
