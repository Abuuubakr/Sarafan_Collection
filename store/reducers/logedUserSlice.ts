import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import product4 from "../../public/images/product4.jpg";

interface logedUserType {
  logedUser: User | null;
}

const initialState: logedUserType = {
  logedUser: {
    email: "abubakrdavlatzoda@gmail.com",
    password: "7777",
    orders: [
      {
        order: [product4, product4, product4, product4, product4],
        totalPrice: 7779,
      },
    ],
  },
};

const logedUserSlice = createSlice({
  name: "logedUser",
  initialState,
  reducers: {
    loginUser(state, action) {
      const { payload } = action;
      state.logedUser = payload;
    },
    logOutUser(state){
      state.logedUser = null;
    },
    checkoutOrders(state, action) {
      const { payload } = action;
      state.logedUser!.orders.push(payload);
    },
  },
});

export const { loginUser, logOutUser, checkoutOrders } = logedUserSlice.actions;
export default logedUserSlice.reducer;
