// store/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unlock: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleUnlock: (state) => {
      state.unlock = !state.unlock;
    },
  },
});

export const { toggleUnlock } = appSlice.actions;
export default appSlice.reducer;
