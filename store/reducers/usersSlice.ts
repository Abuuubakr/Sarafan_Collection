import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

interface UsersType {
  users : User[];
}

const initialState: UsersType = {
  users : [
    {
      email : 'abubakrdavlatzoda@gmail.com',
      password : '7777'
    }
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser(state, action){
        const { payload } = action
        state.users.push(payload)
    }
  },
});

export const { addNewUser } = usersSlice.actions;
export default usersSlice.reducer;
