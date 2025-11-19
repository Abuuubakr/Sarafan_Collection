import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import product4 from "../../public/images/product4.jpg";

interface UsersType {
  users: User[];
}

const initialState: UsersType = {
  users: [
    {
      email: "abubakrdavlatzoda@gmail.com",
      password: "7777",
      orders: [{ order: [product4, product4, product4, product4, product4], totalPrice: 7779 }],
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser(state, action) {
      const { payload } = action;
      state.users.push(payload);
    },
  },
});

export const { addNewUser } = usersSlice.actions;
export default usersSlice.reducer;
