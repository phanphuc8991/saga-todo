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

import app from "app/firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import todoApi from "api/todoApi";
import urlImage from "api/updateFileImage";
import { loadingEnd, loadingStart } from "components/Button/buttonActions";
import { alertShow, alertHidden } from "components/Alert/alertActions";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} from "features/todo/todoActions";
import * as types from "features/todo/todoActionTypes";
import * as alertTypes from "components/Alert/alertActionTypes";
const storage = getStorage(app);

function* closeAlert() {
  yield delay(10000);
  yield put(alertHidden());
}
function* getTodosAsync() {
  try {
    const todos = yield call(todoApi.getAll);
    if (todos) {
      yield put(getTodos(todos));
    } else {
      yield put(
        alertShow({
          type: "error",
          text: "Error Text",
          description: "Get all todos failure",
        })
      );
    }
  } catch (error) {
    yield put(
      alertShow({
        type: "error",
        text: "Error Text",
        description: "Get all todos failure",
      })
    );
  }
}

function* onCreateTodoStart({ payload }) {
  console.log("onCreateTodoStart", onCreateTodoStart);
  try {
    yield put(loadingStart());
    const storageRef = ref(storage, `"${payload.image.file.name}`);
    // update image
    yield call(uploadBytes, storageRef, payload.image.file);
    // get url image updated.
    const urlImage = yield call(getDownloadURL, storageRef);
    const newPayLoad = { ...payload, image: urlImage };
    const todo = yield call(todoApi.create, newPayLoad);
    if (todo) {
      yield put(loadingEnd());
      yield put(addTodo(todo));
      yield put(
        alertShow({
          type: "success",
          text: "Success Text",
          description: "Add Todo successfully",
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
          description: "Add Todo failure",
        })
      );
    }
  } catch (error) {
    console.log("error", error);
    yield put(loadingEnd());
    yield put(
      alertShow({
        type: "error",
        text: "Error Text",
        description: "Todo name already exists. Please choose anthor Todo name",
      })
    );
  }
}

function* onUpdateTodoStart({ payload }) {
  const { id, newTodo, urlOldImage } = payload;
  let newPayLoad;
  console.log("newTodo", newTodo);
  try {
    yield put(loadingStart());
    // delete old todo image
    if (newTodo.image) {
      console.log("newTodo.image", newTodo.image);
      console.log("urlOldImage", urlOldImage.thumbUrl);

      const desertRef = ref(storage, urlOldImage.thumbUrl);
      yield call(deleteObject, desertRef);
      console.log("1");
      const storageRef = ref(storage, `"${newTodo.image.file.name}`);
      console.log("2");

      // update image
      yield call(uploadBytes, storageRef, newTodo.image.file);
      // get url image updated.
      const urlImage = yield call(getDownloadURL, storageRef);
      console.log("3");

      newPayLoad = { ...newTodo, image: urlImage };
    } else {
      newPayLoad = { ...newTodo };
    }

    const todo = yield call(todoApi.update, id, newPayLoad);
    if (todo) {
      yield put(loadingEnd());
      yield put(updateTodo(todo));
      yield put(
        alertShow({
          type: "success",
          text: "Success Text",
          description: "Update todo successfully",
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
        description: "Todo name already exists. Please choose anthor todo name",
      })
    );
    const task = yield fork(closeAlert);
    yield takeEvery(alertTypes.ALERT_HIDDEN, onCancelDelay, task);
  }
}

function* onUpdateTodo() {
  yield takeLatest(types.UPDATE_TODO_START, onUpdateTodoStart);
}

function* onCreateTodo() {
  console.log("onCreateTodo");
  yield takeLatest(types.ADD_TODO_START, onCreateTodoStart);
}
function* onGetTodos() {
  yield takeEvery(types.GET_TODOS_START, getTodosAsync);
}
function* onCancelDelay(task) {
  yield cancel(task);
}
export default function* todoSaga() {
  console.log("todoSaga");
  yield all([onCreateTodo(), onGetTodos(), onUpdateTodo()]);
}
