import { Container, ScrollArea } from '@mantine/core';
import { Outlet } from 'react-router';
import NewFooter from '../components/NewFooter';
import SiteNav from '../components/SiteNav';

const SiteBody = () => {
    return (
        <>
            <Container fluid px={0}>
                <SiteNav />
                <ScrollArea mih={'100vh'} pt={'5rem'} type='never'>
                    <Outlet />
                </ScrollArea>
                <NewFooter />
            </Container>
        </>
    );
};

export default SiteBody;
