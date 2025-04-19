import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroupedDropdown from '../../components/GroupedDropdown';

describe('boundary', () => {
    const options = [
        { name: 'Option 1', group: 'Group 1' },
        { name: 'Option 2', group: 'Group 1' },
        { name: 'Option 3', group: 'Group 2' },
    ];
    const label = 'Choose an option';

    test('GroupedDropdownComponent boundary renders without crashing', () => {
        render(<GroupedDropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('GroupedDropdownComponent boundary displays the correct label', () => {
        render(<GroupedDropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('GroupedDropdownComponent boundary renders the correct number of options and groups', () => {
        render(<GroupedDropdown label={label} options={options} onChange={() => { }} />);
        const dropdownOptions = screen.getAllByRole('option');
        expect(dropdownOptions).toHaveLength(options.length + 1); // Including "Select an option"
        const dropdownGroups = screen.getAllByRole('group');
        expect(dropdownGroups).toHaveLength(2); // Group 1 and Group 2
    });

    test('GroupedDropdownComponent boundary calls onChange function when an option is selected', () => {
        const handleChange = jest.fn();
        render(<GroupedDropdown label={label} options={options} onChange={handleChange} />);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: options[1].name } });
        expect(handleChange).toHaveBeenCalledWith(options[1].name);
    });

    test('GroupedDropdownComponent boundary updates selected option when a new option is selected', () => {
        render(<GroupedDropdown label={label} options={options} onChange={() => { }} />);

        const dropdown = screen.getByRole('combobox');
        fireEvent.change(dropdown, { target: { value: options[1].name } });
        expect(dropdown.value).toBe(options[1].name);
    });
});
