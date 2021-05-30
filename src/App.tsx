import React from "react";
import { TodoList } from "./components/todo";

const App: React.FC = () => {
  return (
    <>
      <h1>Todo App</h1>
      <section>
        <TodoList />
      </section>
    </>
  );
};

export default App;
