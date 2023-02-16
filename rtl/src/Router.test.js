import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('router', () => {
    test('link', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });

    test('error', () => {
        render(
            <MemoryRouter initialEntries={['/1235']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('errorPage')).toBeInTheDocument();
    });
});
