import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com';

    const loadUsers = async () => {
        const resp = await axios.get(url + '/users');
        setUsers(resp.data);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div data-testid="usersPage">
            {users.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
                    {user.name}
                </Link>
            ))}
        </div>
    );
}
