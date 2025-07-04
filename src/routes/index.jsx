import { createFileRoute } from '@tanstack/react-router';
import HeroBody from '../layout/HeroBody';

export const Route = createFileRoute('/')({
    component: HeroBody,
});
