import * as types from "./authActionTypes";

const initialState = {
  currentUser: null,
};

const authReduer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return state;
    case types.LOG_IN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case types.LOG_OUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};
export default authReduer;
