import * as types from "./projectActionTypes";

const initialState = {
  projects: [],
};

const projectReduer = (state = initialState, action) => {
  switch (action.type) {
    // get
    case types.GET_PROJECTS_START:
      return state;

    case types.GET_PROJECTS: {
      return {
        ...state,
        projects: action.payload,
      };
    }

    // create
    case types.ADD_PROJECT_START:
      return state;

    case types.ADD_PROJECT: {
      const newProjects = [...state.projects];
      newProjects.push(action.payload);
      return {
        ...state,
        projects: newProjects,
      };
    }
    // update
    case types.UPDATE_PROJECT_START:
      return state;

    case types.UPDATE_PROJECT: {
      const newProjects = [...state.projects];
      const updateProjects = newProjects.map((project) => {
        if (project._id === action.payload._id) {
          return action.payload;
        }
        return project;
      });
      return {
        ...state,
        projects: updateProjects,
      };
    }

    // delete
    case types.DELETE_PROJECT_START:
      return state;

    case types.DELETE_PROJECT: {
      console.log("action", action);
      const newProjects = [...state.projects];
      const filterNewProjects = newProjects.filter(
        (project) => project._id !== action.payload._id
      );
      console.log("filterNewProjects", filterNewProjects);
      return {
        ...state,
        projects: filterNewProjects,
      };
    }
    default:
      return state;
  }
};
export default projectReduer;
