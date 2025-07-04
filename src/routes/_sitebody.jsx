import { createFileRoute } from '@tanstack/react-router';
import SiteBody from '../layout/SiteBody';

export const Route = createFileRoute('/_sitebody')({
    component: SiteBody,
});
