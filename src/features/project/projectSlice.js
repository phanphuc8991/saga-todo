import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  isFetching: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // CREATE
    createProjectStart: (state) => {
      state.isFetching = true;
    },
    createProjectSuccess: (state, action) => {
      state.projects.push(action.payload);
      state.isFetching = false;
    },
    createProjectFailure: (state, action) => {
      state.isFetching = false;
    },

    // GET ALL
    getProjectStart: (state) => {
      state.isFetching = true;
    },
    getProjectSuccess: (state, action) => {
      state.projects = action.payload;
      state.isFetching = false;
    },
    getProjectFailure: (state, action) => {
      state.isFetching = false;
    },
  },
});

const { reducer, actions } = projectSlice;
export const {
  createProjectStart,
  createProjectSuccess,
  createProjectFailure,
  getProjectStart,
  getProjectSuccess,
  getProjectFailure,
} = actions;

export default reducer;
