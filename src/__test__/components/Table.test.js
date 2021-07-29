import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../../components/Table';

describe('It renders the table with the information from the array passed', () => {
  const ingredients = [{ ingredient: 'Chicken Thighs', measure: '6' }];
  test('It has a Ingredients column', () => {
    render(<Table ingredients={ingredients} />);
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
  });
  test('It has a Measure column', () => {
    render(<Table ingredients={ingredients} />);
    expect(screen.getByText('Measure')).toBeInTheDocument();
  });
  test('It has a row with the ingredient an measure', () => {
    render(<Table ingredients={ingredients} />);
    const row = document.querySelectorAll('tr')[1];
    expect(row).toHaveTextContent('Chicken Thighs');
    expect(row).toHaveTextContent('6');
  });
});
