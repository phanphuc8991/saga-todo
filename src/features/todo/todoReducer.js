import * as types from "./todoActionTypes";

const initialState = {
  todos: [],
};

const todoReduer = (state = initialState, action) => {
  switch (action.type) {
    // get
    case types.GET_TODOS_START:
      return state;

    case types.GET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    // create
    case types.ADD_TODO_START:
      return state;

    case types.ADD_TODO: {
      const newTodos = [...state.todos];
      newTodos.push(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    }
    // update
    case types.UPDATE_TODO_START:
      return state;

    case types.UPDATE_TODO: {
      const newTodos = [...state.todos];
      const updateTodos = newTodos.map((todo) => {
        if (todo._id === action.payload._id) {
          return action.payload;
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
      };
    }

    // delete
    case types.DELETE_TODO_START:
      return state;

    case types.DELETE_TODO: {
      const newTodos = [...state.todos];
      const filterNewTodos = newTodos.filter(
        (todo) => todo._id !== action.payload._id
      );
      return {
        ...state,
        todos: filterNewTodos,
      };
    }
    default:
      return state;
  }
};
export default todoReduer;
