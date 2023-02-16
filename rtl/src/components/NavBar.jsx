import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <Link data-testid="main-link" to="/">
                Main
            </Link>
            <Link data-testid="about-link" to="/about">
                About
            </Link>
            <Link data-testid="users-link" to="/users">
                Users
            </Link>
        </>
    );
}
