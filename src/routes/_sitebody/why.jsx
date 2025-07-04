import { createFileRoute } from '@tanstack/react-router';
import WhyPage from '../../pages/WhyPage';

export const Route = createFileRoute('/_sitebody/why')({
    component: WhyPage,
});
