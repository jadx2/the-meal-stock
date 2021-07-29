import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('It renders the navbar', () => {
  test('It has a title', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('The Meal Stock')).toBeInTheDocument();
  });
  test('It has link button to home', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
