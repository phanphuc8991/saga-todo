import { fork, takeLatest, delay, call, put } from "redux-saga/effects";

import projectApi from "api/projectApi";

import * as typesButton from "components/Button/buttonActionTypes";

function* onCreateProjectStart({ payload }) {
  console.log("onCreateProjectStart");
  //   try {
  //     const project = yield call(projectApi.create, payload);
  //     console.log("project", project);
  //     if (project) {

  //       yield put(createProjectSuccess(project));
  //     } else {
  //       yield put(createProjectFailure());

  //     }
  //   } catch (error) {
  //     console.log("errrror");
  //     yield put(createProjectFailure());

  //   }
}

function* onCreateProject() {
  yield takeLatest(typesButton.LOADING_START, onCreateProjectStart);
  console.log("onCreateProject");
}

export default function* projectSaga() {
  console.log("projectSaga");
  yield fork(onCreateProject);
}
