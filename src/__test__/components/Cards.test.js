import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Card from '../../components/Cards';

describe('It renders the cards for the meals', () => {
  test('It has the name of the item passed as prop', () => {
    render(
      <Card
        name="Chicken"
        image="https://www.themealdb.com/images/media/meals/020z181619788503.jpg"
        endPoint="/ingredients/chicken"
      />,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('Chicken')).toBeInTheDocument();
  });
  test('It has the image of the item passed as prop', () => {
    render(
      <Card
        name="Chicken"
        image="https://www.themealdb.com/images/media/meals/020z181619788503.jpg"
        endPoint="/ingredients/chicken"
      />,
      { wrapper: MemoryRouter },
    );
    const displayedImage = document.querySelector('img');
    expect(displayedImage.src).toBe(
      'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
    );
  });
});
