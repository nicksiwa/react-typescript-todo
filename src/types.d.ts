type AddTodo = (text: string) => void;

type ToggleTodo = (id: string, currentStatus: boolean) => void;

type DeleteTodo = (id: string) => void;

type CompletedAllTodo = () => void;

type SetVisibilityFilter = (filter: string) => void;

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

interface TodoFormProps {
  addTodo: AddTodo;
}

interface FormField {
  name?: string;
}

interface RootState {
  todo: TodoState;
  visibilityFilter: string;
}

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
}

interface VisibilityFilterState {
  visibilityFilter: string;
}
