import { Outlet } from '@tanstack/react-router';

import ThemeComponent from './ThemeComponent';
import Header from './components/Header';

function App() {
    return (
        <ThemeComponent>
            <Outlet />
        </ThemeComponent>
    );
}

export default App;
