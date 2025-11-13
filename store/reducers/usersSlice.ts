import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

interface UsersType {
  users : User[];
}

const initialState: UsersType = {
  users : [],
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
