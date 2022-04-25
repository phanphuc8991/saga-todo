import * as types from "./projectActionTypes";

const initialState = {
  projects: [],
};

const projectReduer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
};
export default projectReduer;
