import * as redux from "react-redux";
import TodoList from "../../components/todo/TodoList";
import { render, screen, fireEvent } from "../../testUtils";
import { TodoAction, VisibilityFilterAction } from "../../actions";
import { VisibilityFilter } from "../../constants/todoFilter";

test("should render complete all button", () => {
  render(<TodoList />);
  const completeAllButton = screen.getByText(/Completed All/i);
  expect(completeAllButton).toBeInTheDocument();
});

test("should render show completed button", () => {
  render(<TodoList />);
  const showCompletedButton = screen.getByText(/Show Completed/i);
  expect(showCompletedButton).toBeInTheDocument();
});

test("should render show active button", () => {
  render(<TodoList />);
  const showActiveButton = screen.getByText(/Show Active/i);
  expect(showActiveButton).toBeInTheDocument();
});

test("should render show all button", () => {
  render(<TodoList />);
  const showAllButton = screen.getByText(/Show All/i);
  expect(showAllButton).toBeInTheDocument();
});

test("should dispatch action on click completed all", () => {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatch = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatch);

  render(<TodoList />);
  fireEvent.click(screen.getByText(/Completed All/i));

  expect(mockDispatch).toHaveBeenCalledWith(TodoAction.completedAllTodo());
});

test("should dispatch action on click show completed", () => {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatch = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatch);

  render(<TodoList />);
  fireEvent.click(screen.getByText(/Show Completed/i));

  expect(mockDispatch).toHaveBeenCalledWith(
    VisibilityFilterAction.setVisilityFilter(VisibilityFilter.SHOW_COMPLETED)
  );
});

test("should dispatch action on click show active", () => {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatch = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatch);

  render(<TodoList />);
  fireEvent.click(screen.getByText(/Show Active/i));

  expect(mockDispatch).toHaveBeenCalledWith(
    VisibilityFilterAction.setVisilityFilter(VisibilityFilter.SHOW_ACTIVE)
  );
});

test("should dispatch action on click show all", () => {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatch = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatch);

  render(<TodoList />);
  fireEvent.click(screen.getByText(/Show All/i));

  expect(mockDispatch).toHaveBeenCalledWith(
    VisibilityFilterAction.setVisilityFilter(VisibilityFilter.SHOW_ALL)
  );
});
