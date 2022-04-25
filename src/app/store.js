// import library
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from "../features/auth/authSlice";
// import projectSlice from "features/project/projectSlice";
// import alertSlice from "components/Alert/alertSlice";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../utils";
import { applyMiddleware, createStore, combineReducers } from "redux";
import authReducer from "features/auth/authReducer";
import buttonReducer from "components/Button/buttonReducer";
import alertReducer from "components/Alert/alertReducer";
import projectReducer from "features/project/projectReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  button: buttonReducer,
  alert: alertReducer,
  router: connectRouter(history),
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
