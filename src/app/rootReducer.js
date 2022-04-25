import { combineReducers } from "redux";
import authReduer from "features/auth/authReducer";
import buttonReducer from "components/Button/buttonReducer";
const rootReducer = combineReducers({
  auth: authReduer,
  button: buttonReducer,
});
export default rootReducer;
