import { createFileRoute } from '@tanstack/react-router';
import AboutPage from '../../pages/AboutPage';

export const Route = createFileRoute('/_sitebody/about')({
    component: AboutPage,
});
