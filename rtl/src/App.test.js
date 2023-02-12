import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
    test('renders learn react link', () => {
        render(<App />);
        const helloElement = screen.getByText(/hello rtl/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(helloElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });

    test('query', () => {
        render(<App />);
        const helloElement = screen.queryByText(/hell2o rtl/i);
        expect(helloElement).toBeNull();
    });

    test('find', async () => {
        render(<App />);
        const helloElement = await screen.findByText(/data/i);
        expect(helloElement).toBeInTheDocument();
    });

    test('click event', () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-div')).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-div')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-div')).toBeNull();
    });

    test('input event', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('input-test')).toContainHTML('');
        // Искусственное событие
        // fireEvent.input(input, {
        //     target: {
        //         value: '123',
        //     },
        // });
        userEvent.type(input, '123456');
        expect(screen.queryByTestId('input-test')).toContainHTML('123456');
    });
});
