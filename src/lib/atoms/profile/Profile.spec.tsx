import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  it('should render Profile component', () => {
    const src = 'image-source';
    const alt = 'image-alt';
    const className = 'image-className';

    render(<Profile src={src} alt={alt} className={className} />);

    const profile = screen.queryByRole('profile');
    expect(profile).toBeInTheDocument();

    expect(profile).toHaveAttribute('src', src);
    expect(profile).toHaveAttribute('alt', alt);
    expect(profile).toHaveClass(className);
  });
});
