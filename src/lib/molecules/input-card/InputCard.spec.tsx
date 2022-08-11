import { render, screen } from '@testing-library/react';
import InputCard from './InputCard';

describe('InputCard', () => {
  it('should render InputCard component', () => {
    const labelName = 'input-card-labelName';

    render(<InputCard label={labelName} />);

    const inputLabel = screen.queryByText(labelName);
    expect(inputLabel).toBeInTheDocument();

    const input = screen.queryByRole('input');
    expect(input).toBeInTheDocument();
  });
});
