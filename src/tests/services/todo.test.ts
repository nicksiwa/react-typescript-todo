import { rest } from "msw";
import { server } from "../../mocks/server";
import {
  getTodosService,
  addTodoService,
  toggleTodoService,
  deleteTodoService,
} from "../../services/todo";

test("should fetch todos successfully", async () => {
  const mockData: Todo[] = [{ id: "1", title: "demo", isCompleted: false }];
  const res = await getTodosService();

  expect(res).toEqual(mockData);
});

test("should fetch todos erroneously", async () => {
  server.use(
    rest.get("/todos", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  let res = null;

  try {
    await getTodosService();
  } catch (err) {
    res = err.message;
  }

  expect(res).toEqual("Request failed with status code 500");
});

test("should add todo successfully", async () => {
  const mockData: Todo = { id: "1", title: "demo", isCompleted: false };
  const res = await addTodoService("demo");

  expect(res).toEqual(mockData);
});

test("should add todo erroneously", async () => {
  server.use(
    rest.post("/todos", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  let res = null;

  try {
    await addTodoService("demo");
  } catch (err) {
    res = err.message;
  }

  expect(res).toEqual("Request failed with status code 500");
});

test("should toggle todo successfully", async () => {
  const mockData: Todo = { id: "1", title: "demo", isCompleted: true };
  const res = await toggleTodoService("1", false);

  expect(res).toEqual(mockData);
});

test("should toggle todo erroneusly", async () => {
  server.use(
    rest.patch("/todos/:id", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  let res = null;

  try {
    await toggleTodoService("1", false);
  } catch (err) {
    res = err.message;
  }

  expect(res).toEqual("Request failed with status code 500");
});

test("should delete todo successfully", async () => {
  const res = await deleteTodoService("1");

  expect(res).toEqual("1");
});

test("should delete todo erroneusly", async () => {
  server.use(
    rest.delete("/todos/:id", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  let res = null;

  try {
    await deleteTodoService("1");
  } catch (err) {
    res = err.message;
  }

  expect(res).toEqual("Request failed with status code 500");
});
