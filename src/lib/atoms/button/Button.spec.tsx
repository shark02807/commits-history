import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ButtonType } from './Button.types';

describe('Button', () => {
  it('should render child text correctly', () => {
    const childText = 'Click me!';

    render(<Button>{childText}</Button>);

    screen.getByText(childText);
  });

  it('should render Default button', () => {
    const childText = 'button';

    render(<Button type={ButtonType.Default}>{childText}</Button>);

    const button = screen.getByText(childText);

    expect(button).toHaveClass('bg-white');
  });

  it('should render Filled button', () => {
    const childText = 'button';

    render(<Button type={ButtonType.Filled}>{childText}</Button>);

    const button = screen.getByText(childText);

    expect(button).toHaveClass('bg-indigo-900');
  });

  it('should render Text button', () => {
    const childText = 'button';

    render(<Button type={ButtonType.Text}>{childText}</Button>);

    const button = screen.getByText(childText);

    expect(button).toHaveClass('bg-transparent');
  });

  it('should render button with custom class', () => {
    const childText = 'button';

    render(<Button className="custom-class">{childText}</Button>);

    const button = screen.getByText(childText);

    expect(button).toHaveClass('custom-class');
  });

  test('should calls onClick when clicked', () => {
    const handleClick = jest.fn();

    const childText = 'button';

    render(<Button onClick={handleClick}>{childText}</Button>);

    fireEvent.click(screen.getByText(childText));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
