import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";
import projectSaga from "features/project/projectSaga";
export default function* rootSaga() {
  yield all([authSaga(), projectSaga()]);
}
