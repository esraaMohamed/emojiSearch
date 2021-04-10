import { render, screen } from './testUtils/testRender';
import App from './App';

test('renders learn react link', () => {
  render(<App />, { initialState: { searchTerm: 'green' } });
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
