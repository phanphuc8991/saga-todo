import { fork, takeLatest, call, put } from "redux-saga/effects";
import {
  createProjectStart,
  createProjectSuccess,
  createProjectFailure,
} from "./projectSlice";
import projectApi from "api/projectApi";

function* onCreateProjectStart({ payload }) {
  try {
    const project = yield call(projectApi.create, payload);
    yield put(createProjectSuccess(project));
  } catch (error) {
    yield put(createProjectFailure());
  }
}

function* onCreateProject() {
  yield takeLatest(createProjectStart.type, onCreateProjectStart);
}

export default function* projectSaga() {
  yield fork(onCreateProject);
}
