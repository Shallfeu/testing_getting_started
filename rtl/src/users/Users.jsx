import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            {users.map((user) => (
                <div key={user.id} data-testid="user-item">
                    {user.name}
                </div>
            ))}
        </div>
    );
}
