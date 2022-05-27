import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    getCountries() {},
    setCountries(state, action) {
      return action.payload[0];
    },
  },
});

export const { getCountries, setCountries } = userSlice.actions;

export default userSlice.reducer;
