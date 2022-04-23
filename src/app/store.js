// import library
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from "../features/auth/authSlice";
// import projectSlice from "features/project/projectSlice";
// import alertSlice from "components/Alert/alertSlice";
import rootSaga from "../app/rootSaga";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../utils";
import rootReducer from "./rootReducer";
import { applyMiddle, createStore } from "redux";

// const rootReducer = combineReducers({
//   router: connectRouter(history),
//   auth: authSlice,
//   project: projectSlice,
//   alert: alertSlice,
// });
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const store = createStore(rootReducer, applyMiddle(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
