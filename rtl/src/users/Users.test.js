import axios from 'axios';
import { render, screen } from '@testing-library/react';

import { RenderWithRouter } from '../tests/helpers/RenderWithRouter';
import Users from './Users';

jest.mock('axios');

describe('Users', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                },
            ],
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    // test('1', async () => {
    //     axios.get.mockReturnValue(response);
    //     render(<Users />);
    //     const users = await screen.findAllByTestId('user-item');
    //     expect(users.length).toBe(3);
    //     expect(axios.get).toBeCalledTimes(1);
    // });

    test('2', async () => {
        axios.get.mockReturnValue(response);

        render(RenderWithRouter(<Users />));

        const users = await screen.findAllByTestId('user-item');

        expect(users.length).toBe(3);
        expect(users[0]).toHaveAttribute('href', '/users/1');
    });
});
