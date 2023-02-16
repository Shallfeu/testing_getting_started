import { screen } from '@testing-library/react';
import { RenderWithRouter } from '../tests/helpers/RenderWithRouter';
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

describe('NAVBAR', () => {
    test('link about', () => {
        RenderWithRouter(<NavBar />);
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
    });

    test('link main', () => {
        RenderWithRouter(<NavBar />);
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('mainPage')).toBeInTheDocument();
    });

    test('link users', () => {
        RenderWithRouter(<NavBar />);
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('usersPage')).toBeInTheDocument();
    });
});
