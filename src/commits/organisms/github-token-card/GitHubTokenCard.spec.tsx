import { render, screen } from '@testing-library/react';
import GitHubTokenCard from './GitHubTokenCard';

describe('GitHubTokenCard', () => {
  it('should render GitHubTokenCard component without token', () => {
    render(<GitHubTokenCard token="" setToken={() => {}} />);

    const inputCard = screen.queryByRole('input-card');
    expect(inputCard).toBeInTheDocument();
  });

  it('should render GitHubTokenCard component with token', () => {
    render(<GitHubTokenCard token="token" setToken={() => {}} />);

    const tokenExistsText = screen.getByText('GitHub Access Token is set');
    expect(tokenExistsText).toBeInTheDocument();
  });
});
