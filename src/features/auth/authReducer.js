import * as types from "./authActionTypes";

const initialState = {
  currentUser: null,
};

const authReduer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default authReduer;
