import TodoList from "../../components/todo/TodoList";
import { render, screen } from "../../testUtils";

test('render complete all button', () => {
  render(<TodoList />)
  const completeAllButton = screen.getByText(/Completed All/i);
  expect(completeAllButton).toBeInTheDocument();
});
