import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { TodoActionType } from "../constants/actionTypes";
import {
  getTodosService,
  addTodoService,
  toggleTodoService,
  deleteTodoService,
} from "../services";

export function getTodosPending() {
  return {
    type: TodoActionType.GET_TODOS_PENDING,
  };
}

export function getTodosSuccess(res: Todo[]) {
  return {
    type: TodoActionType.GET_TODOS_SUCCESS,
    payload: res,
  };
}

export function getTodosFail() {
  return {
    type: TodoActionType.GET_TODOS_FAIL,
  };
}

export function addTodoPending() {
  return {
    type: TodoActionType.ADD_TODO_PENDING,
  };
}

export function addTodoSuccess(todo: Todo) {
  return {
    type: TodoActionType.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function addTodoFail() {
  return {
    type: TodoActionType.ADD_TODO_FAIL,
  };
}

export function toggleTodoPending() {
  return {
    type: TodoActionType.TOGGLE_TODO_PENDING,
  };
}

export function toggleTodoSuccess(todo: Todo) {
  return {
    type: TodoActionType.TOGGLE_TODO_SUCCESS,
    payload: todo,
  };
}

export function toggleTodoFail() {
  return {
    type: TodoActionType.TOGGLE_TODO_FAIL,
  };
}

export function deleteTodoPending() {
  return {
    type: TodoActionType.DELETE_TODO_PENDING,
  };
}

export function deleteTodoSuccess(id: string) {
  return {
    type: TodoActionType.DELETE_TODO_SUCCESS,
    id,
  };
}

export function deleteTodoFail() {
  return {
    type: TodoActionType.DELETE_TODO_FAIL,
  };
}

export function getTodos(): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    try {
      dispatch(getTodosPending());
      const res = await getTodosService();
      dispatch(getTodosSuccess(res));
    } catch (err) {
      dispatch(getTodosFail());
      console.log(err);
    }
  };
}

export function addTodo(
  text: string
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    try {
      dispatch(addTodoPending());
      const res = await addTodoService(text);
      dispatch(addTodoSuccess(res));
    } catch (err) {
      dispatch(addTodoFail());
      console.log(err);
    }
  };
}

export function toggleTodo(
  id: string,
  currentStatus: boolean
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    try {
      dispatch(toggleTodoPending());
      const res = await toggleTodoService(id, currentStatus);
      dispatch(toggleTodoSuccess(res));
    } catch (err) {
      dispatch(toggleTodoFail());
      console.log(err);
    }
  };
}

export function deleteTodo(
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    try {
      dispatch(deleteTodoPending());
      const resId = await deleteTodoService(id);
      dispatch(deleteTodoSuccess(resId));
    } catch (err) {
      dispatch(deleteTodoFail());
      console.log(err);
    }
  };
}

export function completedAllTodo() {
  return {
    type: TodoActionType.COMPLETED_ALL,
  };
}
