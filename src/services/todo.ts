import service from "./config";

export const getTodosService = () =>
  service.get<Todo[]>("/todos").then((res) => res.data);

export const addTodoService = (text: string) =>
  service
    .post<Todo>("/todos", { title: text, isCompleted: false })
    .then((res) => res.data);

export const toggleTodoService = (id: string, currentStatus: boolean) =>
  service
    .patch<Todo>(`/todos/${id}`, { isCompleted: !currentStatus })
    .then((res) => res.data);

export const deleteTodoService = (id: string) =>
  service.delete<Todo>(`todos/${id}`).then(() => id);
