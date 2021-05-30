import App from '../../App';
import { render, screen } from "../../testUtils";

test('render Todo App title', () => {
  render(<App />);
  const appTitile = screen.getByText(/Todo App/i);
  expect(appTitile).toBeInTheDocument();
});
