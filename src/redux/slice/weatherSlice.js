import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialWeatherData: {},
};
export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.initialWeatherData = action.payload;
    },
  },
});

export const { addData } = weatherSlice.actions;
export default weatherSlice.reducer;
