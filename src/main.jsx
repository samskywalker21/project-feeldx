import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import HeroBody from './layout/HeroBody';
import SiteBody from './layout/SiteBody';
import WhyPage from './pages/WhyPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

// import { RouterProvider, createRouter } from '@tanstack/react-router';

// import { routeTree } from './routeTree.gen';

// // const router = createRouter({ routeTree });

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            { path: '/', Component: HeroBody },
            {
                Component: SiteBody,
                children: [
                    { path: '/why', Component: WhyPage },
                    { path: '/about', Component: AboutPage },
                    { path: '/services', Component: ServicesPage },
                ],
            },
        ],
    },
]);

const root = document.getElementById('root');

createRoot(root).render(<RouterProvider router={router} />);

// const rootElement = document.getElementById('root');
// if (!rootElement.innerHTML) {
//     const root = createRoot(rootElement);
//     root.render(
//         <StrictMode>
//             <RouterProvider router={router} />
//         </StrictMode>
//     );
// }
