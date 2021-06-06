import { rest } from "msw";
import { mockStore } from "../../testUtils";
import { server } from "../../mocks/server";
import { TodoAction } from "../../actions";
import { TodoActionType } from "../../constants/actionTypes";

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

  server.use(
    rest.get("/todos", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

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

  store.dispatch(TodoAction.addTodo("demo") as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action start add of todo and another action to mark the fail add", (done) => {
  const store = mockStore({});
  const expectedAction = [
    { type: TodoActionType.ADD_TODO_PENDING },
    { type: TodoActionType.ADD_TODO_FAIL },
  ];

  server.use(
    rest.post("/todos", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  store.dispatch(TodoAction.addTodo("demo") as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action for pending toggle todo", () => {
  const expectedAction = {
    type: TodoActionType.TOGGLE_TODO_PENDING,
  };

  expect(TodoAction.toggleTodoPending()).toEqual(expectedAction);
});

test("should create an action for successful toggle todo", () => {
  const mockTodo: Todo = { id: "1", title: "demo", isCompleted: true };
  const expectedAction = {
    type: TodoActionType.TOGGLE_TODO_SUCCESS,
    payload: mockTodo,
  };

  expect(TodoAction.toggleTodoSuccess(mockTodo)).toEqual(expectedAction);
});

test("should create an action for failure toggle todo", () => {
  const expectedAction = {
    type: TodoActionType.TOGGLE_TODO_FAIL,
  };

  expect(TodoAction.toggleTodoFail()).toEqual(expectedAction);
});

test("should create an action start toggle of todo and another action to mark the success toggle", (done) => {
  const store = mockStore({});
  const mockData: Todo = { id: "1", title: "demo", isCompleted: true };
  const expectedAction = [
    {
      type: TodoActionType.TOGGLE_TODO_PENDING,
    },
    {
      type: TodoActionType.TOGGLE_TODO_SUCCESS,
      payload: mockData,
    },
  ];

  store.dispatch(TodoAction.toggleTodo("1", false) as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action start toggle of todo and another action to mark the fail toggle", (done) => {
  const store = mockStore({});
  const expectedAction = [
    { type: TodoActionType.TOGGLE_TODO_PENDING },
    { type: TodoActionType.TOGGLE_TODO_FAIL },
  ];

  server.use(
    rest.patch("/todos/:id", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  store.dispatch(TodoAction.toggleTodo("1", false) as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action for pending delete of todo", () => {
  const expectedAction = {
    type: TodoActionType.DELETE_TODO_PENDING,
  };

  expect(TodoAction.deleteTodoPending()).toEqual(expectedAction);
});

test("should create an action for successful delete of todo", () => {
  const expectedAction = {
    type: TodoActionType.DELETE_TODO_SUCCESS,
    id: "1",
  };

  expect(TodoAction.deleteTodoSuccess("1")).toEqual(expectedAction);
});

test("should create an action for failure delete of todo", () => {
  const expectedAction = {
    type: TodoActionType.DELETE_TODO_FAIL,
  };

  expect(TodoAction.deleteTodoFail()).toEqual(expectedAction);
});

test("should create an action start delete of todo and another action to mark the success delete", (done) => {
  const store = mockStore({});
  const expectedAction = [
    {
      type: TodoActionType.DELETE_TODO_PENDING,
    },
    {
      type: TodoActionType.DELETE_TODO_SUCCESS,
      id: "1",
    },
  ];

  store.dispatch(TodoAction.deleteTodo("1") as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

test("should create an action start delete of todo and another action to mark the fail delete", (done) => {
  const store = mockStore({});
  const expectedAction = [
    { type: TodoActionType.DELETE_TODO_PENDING },
    { type: TodoActionType.DELETE_TODO_FAIL },
  ];

  server.use(
    rest.delete("/todos/:id", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  store.dispatch(TodoAction.deleteTodo("1") as any);
  store.subscribe(() => {
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});
