import { combineReducers } from "redux";
import authReduer from "features/auth/authReducer";

const rootReducer = combineReducers({
  auth: authReduer,
});
export default rootReducer;
