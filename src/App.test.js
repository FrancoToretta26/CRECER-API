import { render, screen } from '@testing-library/react';
import App from './App';
import Registro from "./Registro"

test('renders learn react link', () => {
  render(<App />);
  render(<Registro />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
