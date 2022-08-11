import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('should render Input component', () => {
    const className = 'input-className';

    render(<Input className={className} value="" onChangeHandler={() => {}} />);

    const input = screen.queryByRole('input');
    expect(input).toBeInTheDocument();

    expect(input).toHaveClass(className);
  });
});
