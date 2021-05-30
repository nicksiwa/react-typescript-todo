import { AnyAction } from "redux";
import { TodoActionType } from "../constants/actionTypes";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export default function todoReducer(
  state = initialState,
  action: AnyAction
): TodoState {
  switch (action.type) {
    case TodoActionType.GET_TODOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case TodoActionType.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case TodoActionType.GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TodoActionType.ADD_TODO_PENDING:
      return { ...state };
    case TodoActionType.ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodoActionType.ADD_TODO_FAIL:
      return { ...state };
    case TodoActionType.TOGGLE_TODO_PENDING:
      return { ...state };
    case TodoActionType.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case TodoActionType.TOGGLE_TODO_FAIL:
      return { ...state };
    case TodoActionType.DELETE_TODO_PENDING:
      return { ...state };
    case TodoActionType.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TodoActionType.DELETE_TODO_FAIL:
      return { ...state };
    case TodoActionType.COMPLETED_ALL:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, isCompleted: true })),
      };
    default:
      return state;
  }
}
