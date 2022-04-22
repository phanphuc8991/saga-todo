import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  isFetching: false,
  error: false,
  success: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // CREATE
    createProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createProjectSuccess: (state, action) => {
      state.projects.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    createProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = projectSlice;
export const {
  createProjectStart,
  createProjectSuccess,
  createProjectFailure,
} = actions;

export default reducer;
