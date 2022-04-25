import * as types from "./buttonActionTypes";

const initialState = {
  loading: false,
};

const buttonReduer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default buttonReduer;
