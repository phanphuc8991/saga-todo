import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";
import projectSaga from "features/project/projectSaga";
import todoSaga from "features/todo/todoSaga";
export default function* rootSaga() {
  yield all([authSaga(), projectSaga(), todoSaga()]);
}
