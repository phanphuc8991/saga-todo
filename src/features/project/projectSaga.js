// import { fork, takeLatest, delay, call, put } from "redux-saga/effects";
// import {
//   createProjectStart,
//   createProjectSuccess,
//   createProjectFailure,
//   getProjectStart,
//   getProjectSuccess,
//   getProjectFailure,
// } from "./projectSlice";
// import { displayAlert, resetAlert } from "components/Alert/alertSlice";
// import projectApi from "api/projectApi";

// function* alert(message) {
//   yield put(displayAlert(message));
//   yield delay(3000);
//   yield put(resetAlert(""));
// }

// function* onCreateProjectStart({ payload }) {
//   console.log("onCreateProjectStart");
//   try {
//     const project = yield call(projectApi.create, payload);
//     console.log("project", project);
//     if (project) {
//       yield fork(alert, "success");
//       yield put(createProjectSuccess(project));
//     } else {
//       yield put(createProjectFailure());
//       yield fork(alert, "error");
//     }
//   } catch (error) {
//     console.log("errrror");
//     yield put(createProjectFailure());
//     yield fork(alert, "error");
//   }
// }

// function* onCreateProjectStart({ payload }) {
//   console.log("onCreateProjectStart");
//   try {
//     const project = yield call(projectApi.create, payload);
//     console.log("project", project);
//     if (project) {
//       yield fork(alert, "success");
//       yield put(createProjectSuccess(project));
//     } else {
//       yield put(createProjectFailure());
//       yield fork(alert, "error");
//     }
//   } catch (error) {
//     console.log("errrror");
//     yield put(createProjectFailure());
//     yield fork(alert, "error");
//   }
// }

// function* onCreateProject() {
//   console.log("onCreateProject");
//   yield takeLatest(createProjectStart.type, onCreateProjectStart);
// }

// export default function* projectSaga() {
//   console.log("projectSaga");
//   yield fork(onCreateProject);
// }
