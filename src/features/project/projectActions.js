import * as types from "./projectActionTypes";

// get
export const getProjects = (project) => ({
  type: types.GET_PROJECTS,
  payload: project,
});

export const getProjectsStart = () => ({
  type: types.GET_PROJECTS_START,
});

// create
export const addProjectStart = (project) => ({
  type: types.ADD_PROJECT_START,
  payload: project,
});
export const addProject = (project) => ({
  type: types.ADD_PROJECT,
  payload: project,
});

// update
export const updateProjectStart = (project) => ({
  type: types.UPDATE_PROJECT_START,
  payload: project,
});
export const updateProject = (project) => ({
  type: types.UPDATE_PROJECT,
  payload: project,
});

// delete
