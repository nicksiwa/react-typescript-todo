import App from '../../App';
import { render, screen } from "../../testUtils";

test('should render todo app title', () => {
  render(<App />);
  const appTitile = screen.getByText(/Todo App/i);
  expect(appTitile).toBeInTheDocument();
});
