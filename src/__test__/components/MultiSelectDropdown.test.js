import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiSelectDropdown from '../../components/MultiSelectDropdown';

describe('boundary', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const label = 'Choose options';

    test('MultiSelectDropdownComponent boundary renders without crashing', () => {
        render(<MultiSelectDropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('MultiSelectDropdownComponent boundary displays the correct label', () => {
        render(<MultiSelectDropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('MultiSelectDropdownComponent boundary renders the correct number of options', () => {
        render(<MultiSelectDropdown label={label} options={options} onChange={() => { }} />);
        const dropdownOptions = screen.getAllByRole('option');
        expect(dropdownOptions).toHaveLength(options.length);
    });
});
