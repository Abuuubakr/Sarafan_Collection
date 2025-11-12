import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
