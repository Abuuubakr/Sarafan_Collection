import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

interface logedUserType {
  logedUser : User | null;
}

const initialState: logedUserType = {
  logedUser : null,
};

const logedUserSlice = createSlice({
  name: "logedUser",
  initialState,
  reducers: {
  },
});

// export const {  } = logedUserSlice.actions;
export default logedUserSlice.reducer;
