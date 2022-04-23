import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertName: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.alertName = action.payload;
    },
    resetAlert: (state, action) => {
      state.alertName = "";
    },
  },
});

const { reducer, actions } = alertSlice;
export const { displayAlert, resetAlert } = actions;

export default reducer;
