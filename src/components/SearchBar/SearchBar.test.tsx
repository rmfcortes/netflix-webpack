/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as router from 'react-router'

import SearchBar from './SearchBar';

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})


test('Search bar input', () => {
    render(<SearchBar />);
    const inputEl = screen.getByPlaceholderText('What do you want to watch?');
    const buttonEl = screen.getByText('Search');

    fireEvent.change(inputEl, { target: { value: 'test jest' }});
    fireEvent.click(buttonEl);

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue('test jest');
    expect(navigate).toHaveBeenCalledWith('/search/test jest');
});

