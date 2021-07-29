import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoMatch from '../../containers/NoMatch';

test('It render 404 if the end point does not exist', () => {
  render(<NoMatch />);
  expect(screen.getByText('404 No Match')).toBeInTheDocument();
});
