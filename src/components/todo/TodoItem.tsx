import React from "react";

const TodoItem: React.FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id, todo.isCompleted)}
        />
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
};

export default TodoItem;
