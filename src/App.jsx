import { Outlet } from 'react-router';
import ThemeComponent from './ThemeComponent';

function App() {
    return (
        <ThemeComponent>
            <Outlet />
        </ThemeComponent>
    );
}

export default App;
