import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../../components/Filter';

describe('It returns the radio buttons to filter the sections', () => {
  const handleChange = (e) => e.target.value;
  test('It has a div label', () => {
    render(<Filter onChange={handleChange} filter="categories" />);
    expect(screen.getByText('Filter by:')).toBeInTheDocument();
  });
  test('It has two options: "Categories" and "Ingredients"', () => {
    render(<Filter onChange={handleChange} filter="categories" />);
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Ingredient')).toBeInTheDocument();
  });
});
