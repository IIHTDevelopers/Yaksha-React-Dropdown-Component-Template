import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchableDropdown from '../../components/SearchableDropdown';

describe('boundary', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const label = 'Choose an option';

    test('SearchableDropdownComponent boundary renders without crashing', () => {
        render(<SearchableDropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('SearchableDropdownComponent boundary displays the correct label', () => {
        render(<SearchableDropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('SearchableDropdownComponent boundary renders the correct number of options initially', () => {
        render(<SearchableDropdown label={label} options={options} onChange={() => { }} />);
        const dropdownOptions = screen.getAllByRole('option');
        expect(dropdownOptions).toHaveLength(options.length + 1); // Including "Select an option"
    });

    test('SearchableDropdownComponent boundary filters options based on search term', () => {
        render(<SearchableDropdown label={label} options={options} onChange={() => { }} />);
        const searchInput = screen.getByPlaceholderText('Search...');

        fireEvent.change(searchInput, { target: { value: '1' } });
        const filteredOptions = screen.getAllByRole('option');
        expect(filteredOptions).toHaveLength(2); // "Select an option" + "Option 1"
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    test('SearchableDropdownComponent boundary calls onChange function when an option is selected', () => {
        const handleChange = jest.fn();
        render(<SearchableDropdown label={label} options={options} onChange={handleChange} />);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: options[1] } });
        expect(handleChange).toHaveBeenCalledWith(options[1]);
    });

    test('SearchableDropdownComponent boundary updates selected option when a new option is selected', () => {
        render(<SearchableDropdown label={label} options={options} onChange={() => { }} />);

        const dropdown = screen.getByRole('combobox');
        fireEvent.change(dropdown, { target: { value: options[1] } });
        expect(dropdown.value).toBe(options[1]);
    });
});
