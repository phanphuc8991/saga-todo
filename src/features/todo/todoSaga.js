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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

function* onCreateTodoStart({ payload }) {
  console.log("onCreateTodoStart", onCreateTodoStart);
  try {
    // yield put(loadingStart());
    const storage = getStorage();
    const storageRef = ref(storage, `"images/"${payload.image.file.name}`);
    const url = yield call(uploadBytes, storageRef, payload.image.file);
    console.log("urlroofasfasdfs", url);

    //const todo = yield call(todoApi.create, payload);

    // if (todo) {
    //   yield put(loadingEnd());
    //   yield put(addTodo(todo));
    //   yield put(
    //     alertShow({
    //       type: "success",
    //       text: "Success Text",
    //       description: "Add Todo successfully",
    //     })
    //   );
    // } else {
    //   yield put(loadingEnd());
    //   yield put(
    //     alertShow({
    //       type: "error",
    //       text: "Error Text",
    //       description: "Add failure",
    //     })
    //   );
    // }
  } catch (error) {
    console.log("error", error);
    // yield put(loadingEnd());
    // yield put(
    //   alertShow({
    //     type: "error",
    //     text: "Error Text",
    //     description: "Todo name already exists. Please choose anthor Todo name",
    //   })
    // );
  }
}

function* onCreateTodo() {
  console.log("onCreateTodo");
  yield takeLatest(types.ADD_TODO_START, onCreateTodoStart);
}

export default function* todoSaga() {
  console.log("todoSaga");
  yield all([onCreateTodo()]);
}
