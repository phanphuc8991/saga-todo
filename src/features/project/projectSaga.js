import {
  fork,
  takeLatest,
  delay,
  call,
  put,
  all,
  takeEvery,
} from "redux-saga/effects";

import projectApi from "api/projectApi";
import { loadingEnd, loadingStart } from "components/Button/buttonActions";
import { alertShow, alertHidden } from "components/Alert/alertActions";
import {
  addProject,
  updateProject,
  getProjects,
} from "features/project/projectActions";
import * as types from "features/project/projectActionTypes";

function* closeAlert() {
  yield delay(10000);
  yield put(alertHidden({ type: "", message: "" }));
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
      yield fork(closeAlert);
    } else {
      yield put(loadingEnd());
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Add failure",
        })
      );
      yield fork(closeAlert);
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
    yield fork(closeAlert);
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
      yield fork(closeAlert);
    } else {
      yield put(loadingEnd());
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Update failure",
        })
      );
      yield fork(closeAlert);
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
    yield fork(closeAlert);
  }
}

function* onCreateProject() {
  yield takeLatest(types.ADD_PROJECT_START, onCreateProjectStart);
}

function* onUpdateproject() {
  yield takeLatest(types.UPDATE_PROJECT_START, onUpdateProjectStart);
}

function* getProjectsAsync() {
  try {
    const user = yield call(projectApi.getAll);

    if (user) {
      yield put(getProjects(user));
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

function* onGetProjects() {
  yield takeEvery(types.GET_PROJECTS_START, getProjectsAsync);
}

export default function* projectSaga() {
  yield all([onCreateProject(), onGetProjects(), onUpdateproject()]);
}
