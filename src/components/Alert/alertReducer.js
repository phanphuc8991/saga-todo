import * as types from "./alertActionTypes";

const initialState = {
  type: "",
  text: "",
  description: "",
};

const AlertReduer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALERT_SHOW:
      return {
        ...state,
        type: action.payload.type,
        text: action.payload.text,
        description: action.payload.description,
      };
    case types.ALERT_HIDDEN:
      return {
        ...state,
        type: "",
        text: "",
        description: "",
      };
    default:
      return state;
  }
};
export default AlertReduer;
