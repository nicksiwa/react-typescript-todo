import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { TodoAction, VisibilityFilterAction } from "../../actions";
import { getVisibleTodo } from "../../selectors";
import { VisibilityFilter } from "../../constants/todoFilter";

const TodoList: React.FC = () => {
  const todo = useSelector(getVisibleTodo);
  const dispatch = useDispatch();

  const addTodo: AddTodo = (text: string) => {
    dispatch(TodoAction.addTodo(text));
  };

  const toggleTodo: ToggleTodo = (id: string, currentStatus: boolean) => {
    dispatch(TodoAction.toggleTodo(id, currentStatus));
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    dispatch(TodoAction.deleteTodo(id));
  };

  const completedAllTodo: CompletedAllTodo = () => {
    dispatch(TodoAction.completedAllTodo());
  };

  const setVisilityFilter: SetVisibilityFilter = (filter: string) => {
    dispatch(VisibilityFilterAction.setVisilityFilter(filter));
  };

  useEffect(() => {
    const getTodos = () => {
      dispatch(TodoAction.getTodos());
    }

    getTodos();
  }, [dispatch]);

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <button onClick={completedAllTodo}>Completed All</button>
      <ul>
        {todo &&
          todo.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </ul>
      <button
        onClick={() => setVisilityFilter(VisibilityFilter.SHOW_COMPLETED)}
      >
        Show Completed
      </button>
      <button onClick={() => setVisilityFilter(VisibilityFilter.SHOW_ACTIVE)}>
        Show Active
      </button>
      <button onClick={() => setVisilityFilter(VisibilityFilter.SHOW_ALL)}>
        Show All
      </button>
    </>
  );
};

export default TodoList;
