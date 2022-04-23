import * as types from "./buttonActionTypes";

const initialState = {
  loading: false,
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
