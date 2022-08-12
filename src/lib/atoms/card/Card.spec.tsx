import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render children', () => {
    const cardContent = 'Hello world';

    render(<Card>{cardContent}</Card>);

    screen.getByText(cardContent);
  });
});
