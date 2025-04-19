import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('boundary', () => {
  test('AppComponent boundary checks if <h1>Dropdown Components</h1> is there', () => {
    render(<App />);
    expect(screen.getByText('Dropdown Components')).toBeInTheDocument();
  });

  test('AppComponent boundary checks if SearchableDropdown component is there', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });
});
