import { fork, take, call, put } from "redux-saga/effects";
import { loginStart, loginSuccess, loginFailure, logout } from "./authSlice";
import authApi from "api/authApi";
import { push } from "connected-react-router";
import * as types from "./authActionTypes";
function* handleLogin(payload) {
  console.log("run....handleLogin");
  try {
    const user = yield call(authApi.login, payload);
    localStorage.setItem("access_token", user.accessToken);
    yield put(loginSuccess(user));
    console.log("run.....");
    yield put(push("/home"));
    return true;
  } catch (error) {
    yield put(loginFailure());
    return false;
  }
}

function* handleOut() {
  // delete toke
  localStorage.removeItem("access_token");
  yield put(push("/login"));
  // redirec page
}

function* watchLoginFlow() {
  console.log("run....watchLoginFlow");
  while (true) {
    // check user login
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      // login
      while (true) {
        const action = yield take(types.LOG_IN);
        const loginSuccess = yield call(handleLogin, action.payload);
        if (loginSuccess) break;
      }
    }
    yield take(logout.type);
    yield call(handleOut);
  }
}
export default function* authSaga() {
  console.log("run....authSaga");
  yield fork(watchLoginFlow);
}
