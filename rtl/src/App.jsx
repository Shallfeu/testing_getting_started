// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');

//     const handleClick = () => setToggle((prev) => !prev);

//     useEffect(() => {
//         setTimeout(() => {
//             setData({});
//         }, 100);
//     }, []);

//     return (
//         <div>
//             {toggle && <div data-testid="toggle-div">toggle</div>}
//             {data && <div>data</div>}
//             <h1>Hello RTL</h1>
//             <button data-testid="toggle-btn" onClick={handleClick}>
//                 Click me
//             </button>
//             <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="input value" />
//             <div data-testid="input-test">{value}</div>
//         </div>
//     );
// }

// export default App;

import NavBar from './components/NavBar';
import AppRouter from './routes/AppRouter';

export default function App() {
    return (
        <>
            <NavBar />
            <AppRouter />
        </>
    );
}
