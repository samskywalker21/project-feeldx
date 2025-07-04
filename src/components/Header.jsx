import { useDisclosure } from '@mantine/hooks';
import {
    Container,
    Flex,
    Grid,
    Image,
    Group,
    Button,
    Burger,
} from '@mantine/core';
import { Link } from '@tanstack/react-router';

import logo from '../assets/logo.png';

const Header = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Container
            fluid
            w={'100%'}
            h={{ lg: 110, base: 80 }}
            style={{
                backgroundColor: 'white',
                listStyle: 'none',
                position: 'fixed',
                zIndex: 1,
            }}
            px={{ lg: '15rem', base: '1rem' }}
        >
            <Grid>
                <Grid.Col span={4}>
                    <Flex w={{ lg: '13rem', base: '10rem' }}>
                        <Image src={logo} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Group justify='flex-end' pt={{ lg: '2rem', base: '1rem' }}>
                        <Button
                            variant='transparent'
                            visibleFrom='md'
                            color='green.9'
                            size='lg'
                            component={Link}
                            to='/'
                        >
                            Home
                        </Button>
                        <Button
                            variant='transparent'
                            visibleFrom='md'
                            color='green.9'
                            size='lg'
                            component={Link}
                            to='/about'
                        >
                            About Us
                        </Button>
                        <Button
                            variant='transparent'
                            visibleFrom='md'
                            color='green.9'
                            size='lg'
                            component={Link}
                            to='/news'
                        >
                            Contact Us
                        </Button>
                        <Burger
                            hiddenFrom='md'
                            opened={opened}
                            onClick={toggle}
                            color='green.9'
                        />
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Header;
