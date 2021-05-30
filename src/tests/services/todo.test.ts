import {
  getTodosService,
  addTodoService,
  toggleTodoService,
  deleteTodoService,
} from "../../services/todo";
import service from "../../services/config";

const mockService = (httpMethod: any) => jest.spyOn(service, httpMethod);

test("should fetch todos successfully", async () => {
  const mockData: Todo[] = [{ id: "1", title: "demo", isCompleted: false }];
  // mockService("get").mockResolvedValueOnce({ data: mockData });

  const res = await getTodosService()

  expect(res).toEqual(mockData);
});

test("should fetch todos erroneously", async () => {
  mockService("get").mockRejectedValueOnce(new Error("This error for testing"));

  await expect(getTodosService()).rejects.toThrow("This error for testing");
});

test("should add todo successfully", async () => {
  const mockData: Todo = { id: "1", title: "demo", isCompleted: false };
  mockService("post").mockResolvedValueOnce({ data: mockData });

  await expect(addTodoService("demo")).resolves.toEqual(mockData);
});

test("should add todo successfully with params", async () => {
  mockService("post").mockResolvedValueOnce({});
  await addTodoService("demo");

  expect(mockService("post")).toHaveBeenCalledWith("/todos", {
    isCompleted: false,
    title: "demo",
  });
});

test("should add todo erroneously", async () => {
  mockService("post").mockRejectedValueOnce(
    new Error("This error for testing")
  );

  await expect(addTodoService("demo")).rejects.toThrow(
    "This error for testing"
  );
});

test("should toggle todo successfully", async () => {
  const mockData: Todo = { id: "1", title: "demo", isCompleted: false };
  mockService("patch").mockResolvedValueOnce({ data: mockData });

  await expect(toggleTodoService("1", true)).resolves.toEqual(mockData);
});

test("should toggle todo successfully with params", async () => {
  mockService("patch").mockResolvedValueOnce({});
  await toggleTodoService("1", false);

  expect(mockService("patch")).toHaveBeenCalledWith("/todos/1", {
    isCompleted: true,
  });
});

test("should toggle todo erroneusly", async () => {
  mockService("patch").mockRejectedValueOnce(new Error("This error for testing"));

  await expect(toggleTodoService("1", false)).rejects.toThrow(
    "This error for testing"
  );
});

test("should delete todo successfully", async () => {
  const mockData: Todo = { id: "1", title: "demo", isCompleted: false };
  mockService("delete").mockResolvedValueOnce({ data: mockData });

  await expect(deleteTodoService("1")).resolves.toEqual("1");
});

test("should delete todo successfully with params", async () => {
  mockService("delete").mockResolvedValueOnce({});
  await deleteTodoService("1");

  expect(mockService("delete")).toHaveBeenCalledWith("todos/1");
});

test("should delete todo erroneusly", async () => {
  mockService("delete").mockRejectedValueOnce(
    new Error("This error for testing")
  );

  await expect(deleteTodoService("1")).rejects.toThrow(
    "This error for testing"
  );
});
