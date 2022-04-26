import * as types from "./todoActionTypes";

// get
export const getTodos = (todo) => ({
  type: types.GET_TODOS,
  payload: todo,
});

export const getTodosStart = () => ({
  type: types.GET_TODOS_START,
});

// create
export const addTodoStart = (todo) => ({
  type: types.ADD_TODO_START,
  payload: todo,
});
export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

// update
export const updateTodoStart = (todo) => ({
  type: types.UPDATE_TODO_START,
  payload: todo,
});
export const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});

// delete
export const deleteTodoStart = (todo) => ({
  type: types.DELETE_TODO_START,
  payload: todo,
});
export const deleteTodo = (todo) => ({
  type: types.DELETE_TODO,
  payload: todo,
});
