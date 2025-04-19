import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from '../../components/Dropdown';

describe('boundary', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const label = 'Choose an option';

    test('DropdownComponent boundary renders without crashing', () => {
        render(<Dropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('DropdownComponent boundary displays the correct label', () => {
        render(<Dropdown label={label} options={options} onChange={() => { }} />);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    test('DropdownComponent boundary renders the correct number of options', () => {
        render(<Dropdown label={label} options={options} onChange={() => { }} />);
        const dropdownOptions = screen.getAllByRole('option');
        expect(dropdownOptions).toHaveLength(options.length + 1); // Including "Select an option"
    });

    test('DropdownComponent boundary calls onChange function when an option is selected', () => {
        const handleChange = jest.fn();
        render(<Dropdown label={label} options={options} onChange={handleChange} />);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: options[1] } });
        expect(handleChange).toHaveBeenCalledWith(options[1]);
    });

    test('DropdownComponent boundary updates selected option when a new option is selected', () => {
        render(<Dropdown label={label} options={options} onChange={() => { }} />);

        const dropdown = screen.getByRole('combobox');
        fireEvent.change(dropdown, { target: { value: options[1] } });
        expect(dropdown.value).toBe(options[1]);
    });
});
