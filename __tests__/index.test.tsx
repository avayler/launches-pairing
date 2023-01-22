import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('Renders Home Page with Title', () => {
    render(<Home />);
    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
  });
});
