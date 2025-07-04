import { createFileRoute } from '@tanstack/react-router';
import ServicesPage from '../../pages/ServicesPage';

export const Route = createFileRoute('/_sitebody/services')({
    component: ServicesPage,
});
