import {
  fork,
  takeLatest,
  delay,
  call,
  put,
  all,
  takeEvery,
  cancel,
} from "redux-saga/effects";

import projectApi from "api/projectApi";
import { loadingEnd, loadingStart } from "components/Button/buttonActions";
import { alertShow, alertHidden } from "components/Alert/alertActions";
import {
  addProject,
  updateProject,
  deleteProject,
  getProjects,
} from "features/project/projectActions";
import * as types from "features/project/projectActionTypes";
import * as alertTypes from "components/Alert/alertActionTypes";

function* closeAlert() {
  yield delay(10000);
  yield put(alertHidden());
}

function* getProjectsAsync() {
  try {
    const projects = yield call(projectApi.getAll);
    if (projects) {
      yield put(getProjects(projects));
    } else {
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Get all projects failure",
        })
      );
    }
  } catch (error) {
    yield put(
      alertShow({
        type: "error",
        text: "Error Text",
        description: "Get all projects failure",
      })
    );
  }
}
function* onCreateProjectStart({ payload }) {
  try {
    yield put(loadingStart());
    const project = yield call(projectApi.create, payload);
    if (project) {
      yield put(loadingEnd());
      yield put(addProject(project));

      yield put(
        alertShow({
          type: "success",
          text: "Success Text",
          description: "Add project successfully",
        })
      );
      const task = yield fork(closeAlert);
      yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
    } else {
      yield put(loadingEnd());
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Add failure",
        })
      );
      const task = yield fork(closeAlert);
      yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
    }
  } catch (error) {
    yield put(loadingEnd());
    yield put(
      alertShow({
        type: "error",
        text: "Error Text",
        description:
          "Project name already exists. Please choose anthor project name",
      })
    );
    const task = yield fork(closeAlert);
    yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
  }
}

function* onUpdateProjectStart({ payload }) {
  const { id, newProject } = payload;
  try {
    yield put(loadingStart());
    const project = yield call(projectApi.update, id, newProject);
    if (project) {
      yield put(loadingEnd());
      yield put(updateProject(project));
      yield put(
        alertShow({
          type: "success",
          text: "Success Text",
          description: "Update project successfully",
        })
      );
      const task = yield fork(closeAlert);
      yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
    } else {
      yield put(loadingEnd());
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Update failure",
        })
      );
      const task = yield fork(closeAlert);
      yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
    }
  } catch (error) {
    yield put(loadingEnd());
    yield put(
      alertShow({
        type: "error",
        text: "Error Text",
        description:
          "Project name already exists. Please choose anthor project name",
      })
    );
    const task = yield fork(closeAlert);
    yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
  }
}

function* onDeleteProjectStart({ payload }) {
  try {
    yield put(loadingStart());
    const project = yield call(projectApi.delete, payload.id);
    if (project) {
      yield put(loadingEnd());
      yield put(deleteProject({ _id: payload.id }));
      yield put(
        alertShow({
          type: "success",
          text: "Success Text",
          description: "Delete project successfully",
        })
      );
      const task = yield fork(closeAlert);
      yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
    } else {
      yield put(loadingEnd());
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Delete failure",
        })
      );
      const task = yield fork(closeAlert);
      yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
    }
  } catch (error) {
    yield put(loadingEnd());
    yield put(
      alertShow({
        type: "error",
        text: "Error Text",
        description: "Delete failure",
      })
    );
    const task = yield fork(closeAlert);
    yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
  }
}

function* onCreateProject() {
  yield takeLatest(types.ADD_PROJECT_START, onCreateProjectStart);
}

function* onUpdateproject() {
  yield takeLatest(types.UPDATE_PROJECT_START, onUpdateProjectStart);
}

function* onDeleteproject() {
  yield takeLatest(types.DELETE_PROJECT_START, onDeleteProjectStart);
}

function* onGetProjects() {
  yield takeEvery(types.GET_PROJECTS_START, getProjectsAsync);
}
function* onCancelDelay(task) {
  yield cancel(task);
}

export default function* projectSaga() {
  yield all([
    onCreateProject(),
    onGetProjects(),
    onUpdateproject(),
    onDeleteproject(),
  ]);
}
