import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { TodoAction } from "../../actions";
import { TodoActionType } from "../../constants/actionTypes";
import service from "../../services/config";

const mockService = (httpMethod: any) => jest.spyOn(service, httpMethod);
const middleware: any = [thunk];
const mockStore = configureStore(middleware);

test("should create an action for a pending fetch of todos", () => {
  const expectedAction = {
    type: TodoActionType.GET_TODOS_PENDING,
  };
  expect(TodoAction.getTodosPending()).toEqual(expectedAction);
});

test("should create an action for a successful fetch of todos", () => {
  const demoTodo: Todo[] = [{ id: "1", title: "demo", isCompleted: false }];
  const expectedAction = {
    type: TodoActionType.GET_TODOS_SUCCESS,
    payload: demoTodo,
  };
  expect(TodoAction.getTodosSuccess(demoTodo)).toEqual(expectedAction);
});

test("should create an action for a failure fetch of todos", () => {
  const expectedAction = {
    type: TodoActionType.GET_TODOS_FAIL,
  };
  expect(TodoAction.getTodosFail()).toEqual(expectedAction);
});

test("should craete an action start fetch of todos and another action to mark the success fetch", (done) => {
  const store = mockStore({});
  const mockData: Todo[] = [{ id: "1", title: "demo", isCompleted: false }];
  const expectedAction = [
    {
      type: TodoActionType.GET_TODOS_PENDING,
    },
    {
      type: TodoActionType.GET_TODOS_SUCCESS,
      payload: mockData,
    },
  ];

  mockService("get").mockResolvedValueOnce({ data: mockData });

  store.dispatch(TodoAction.getTodos() as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action start fetch of todos and another action to mark the fail fetch", (done) => {
  const store = mockStore({});
  const expectedAction = [
    {
      type: TodoActionType.GET_TODOS_PENDING,
    },
    {
      type: TodoActionType.GET_TODOS_FAIL,
    },
  ];

  mockService("get").mockRejectedValueOnce(new Error("This error for testing"));

  store.dispatch(TodoAction.getTodos() as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action for pending add of todo", () => {
  const expectedAction = {
    type: TodoActionType.ADD_TODO_PENDING,
  };

  expect(TodoAction.addTodoPending()).toEqual(expectedAction);
});

test("should create an action for successful add of todo", () => {
  const mockTodo: Todo = { id: "1", title: "demo", isCompleted: false };
  const expectedAction = {
    type: TodoActionType.ADD_TODO_SUCCESS,
    payload: mockTodo,
  };

  expect(TodoAction.addTodoSuccess(mockTodo)).toEqual(expectedAction);
});

test("should create an action for failure add of todo", () => {
  const expectedAction = {
    type: TodoActionType.ADD_TODO_FAIL,
  };

  expect(TodoAction.addTodoFail()).toEqual(expectedAction);
});

test("should create an action start add of todo and another action to mark the success add", (done) => {
  const store = mockStore({});
  const mockData: Todo = { id: "1", title: "demo", isCompleted: false };
  const expectedAction = [
    {
      type: TodoActionType.ADD_TODO_PENDING,
    },
    {
      type: TodoActionType.ADD_TODO_SUCCESS,
      payload: mockData,
    },
  ];

  mockService("post").mockResolvedValueOnce({ data: mockData });

  store.dispatch(TodoAction.addTodo("demo") as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action start add of todo and another action to mark the failure add", (done) => {
  const store = mockStore({});
  const expectedAction = [
    { type: TodoActionType.ADD_TODO_PENDING },
    { type: TodoActionType.ADD_TODO_FAIL },
  ];

  mockService("post").mockRejectedValueOnce(
    new Error("This error for testing")
  );

  store.dispatch(TodoAction.addTodo("demo") as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});
