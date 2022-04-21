// import library
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import rootSaga from "../app/rootSaga";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../utils";

const rootReducer = combineReducers({
  router: connectRouter(history),
  users: authSlice,
});
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export default store;
