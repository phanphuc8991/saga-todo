import { fork, take, takeLatest, call, put } from "redux-saga/effects";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
} from "./authSlice";
import authApi from "../../api/authApi";
import { push } from "connected-react-router";

function* handleLogin(payload) {
  console.log("handle login");
  try {
    const user = yield call(authApi.login, payload);
    localStorage.setItem("access_token", user.accessToken);
    yield put(loginSuccess(user));
    console.log("log thanh cong");
    yield put(push("/home"));
    return true;
  } catch (error) {
    yield put(loginFailure);
    console.log("log that bai");
    return false;
  }
}

function* handleOut() {
  console.log("handle Out");
  // delete toke
  localStorage.removeItem("access_token");
  yield put(push("/login"));
  // redirec page
}

function* watchLoginFlow() {
  while (true) {
    // check user login
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      // login
      while (true) {
        const action = yield take(loginStart.type);
        const checkUserLogin = yield call(handleLogin, action.payload);
        if (checkUserLogin) break;
      }
    }
    yield take(logoutStart.type);
    yield call(handleOut);
  }
}
export default function* authSaga() {
  console.log("authSlice");
  yield fork(watchLoginFlow);
}
