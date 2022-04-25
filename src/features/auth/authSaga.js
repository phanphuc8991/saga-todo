import { fork, take, call, put, delay } from "redux-saga/effects";
// import {   } from "./authSlice";
import { login } from "./authActions";
import { alertShow, alertHidden } from "components/Alert/alertActions";
import { loadingEnd, loadingStart } from "components/Button/buttonActions";
import authApi from "api/authApi";
import { push } from "connected-react-router";
import * as types from "features/auth/authActionTypes";

function* closeAlert() {
  yield delay(3000);
  yield put(alertHidden({ type: "", message: "" }));
}

function* handleLogin(payload) {
  try {
    yield put(loadingStart());
    const user = yield call(authApi.login, payload);
    localStorage.setItem("access_token", user.accessToken);

    if (user) {
      yield put(loadingEnd());
      yield put(login(user));
      yield put(push("/home"));
      yield put(alertHidden());
    } else {
      yield put(
        alertShow({
          type: "error",
          text: "Login error",
          description: "The username or password is incorrect",
        })
      );
    }
    return true;
  } catch (error) {
    yield put(loadingEnd());

    yield put(
      alertShow({
        type: "error",
        text: "Login error",
        description: "The username or password is incorrect",
      })
    );

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
  while (true) {
    // check user login
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      // login
      while (true) {
        const action = yield take(types.LOGIN_START);

        const loginSuccess = yield call(handleLogin, action.payload);
        if (loginSuccess) break;
      }
    }
    yield take(types.LOG_OUT);
    yield call(handleOut);
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
}
