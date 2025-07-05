import { Grid, Image, Group, Button, Text, Burger, Stack } from '@mantine/core';
import { useHover, useViewportSize, useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
// import { Link, useNavigate } from '@tanstack/react-router';
import { Link, useNavigate } from 'react-router';
import ContactForm from './ContactForm';
import logo from '../assets/logoWhite.png';

const SiteNav = () => {
    const hoveredAU = useHover();
    const hoveredS = useHover();
    const hoveredW = useHover();
    const hoveredCU = useHover();
    const { width } = useViewportSize();
    const [opened] = useDisclosure(false);
    const nav = useNavigate();

    const handleContact = () => {
        modals.open({
            title: <Text size='xl'>Contact Form</Text>,
            fullScreen: width > 768 ? false : true,
            withCloseButton: false,
            size: 'lg',
            children: <ContactForm />,
        });
    };

    const handleBurger = () => {
        modals.open({
            withCloseButton: false,
            fullScreen: true,
            children: (
                <Stack>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            onClick={() => {
                                modals.closeAll();
                                nav('/project-feeldx');
                            }}
                        >
                            Home
                        </Text>
                    </Button>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            onClick={() => {
                                modals.closeAll();
                                nav('/about');
                            }}
                        >
                            About Us
                        </Text>
                    </Button>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            onClick={() => {
                                modals.closeAll();
                                nav('/services');
                            }}
                        >
                            Services
                        </Text>
                    </Button>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            onClick={() => {
                                modals.closeAll();
                                nav('/why');
                            }}
                        >
                            Why FEELDX
                        </Text>
                    </Button>
                </Stack>
            ),
        });
    };

    return (
        <>
            <Grid
                w={'100%'}
                // pt={'0.625rem'}
                px={10}
                style={{ position: 'fixed', zIndex: 100 }}
                bg={'black'}
            >
                <Grid.Col span={5}>
                    <Link to={'/project-feeldx'}>
                        <Image src={logo} w={'9.375rem'} />
                    </Link>
                </Grid.Col>
                <Grid.Col span={7} pt={'1.563rem'}>
                    <Group justify='flex-end' wrap='nowrap' visibleFrom='md'>
                        <Button variant='transparent'>
                            <Text
                                c={hoveredAU.hovered ? 'green.3' : 'white'}
                                ref={hoveredAU.ref}
                                fw={500}
                                component={Link}
                                to={'/about'}
                            >
                                About Us
                            </Text>
                        </Button>
                        <Button variant='transparent'>
                            <Text
                                c={hoveredS.hovered ? 'green.3' : 'white'}
                                ref={hoveredS.ref}
                                fw={500}
                                component={Link}
                                to={'/services'}
                            >
                                Services
                            </Text>
                        </Button>
                        <Button variant='transparent'>
                            <Text
                                c={hoveredW.hovered ? 'green.3' : 'white'}
                                ref={hoveredW.ref}
                                fw={500}
                                component={Link}
                                to={'/why'}
                            >
                                Why FEELDX
                            </Text>
                        </Button>
                        <Button variant='transparent' onClick={handleContact}>
                            <Text
                                c={hoveredCU.hovered ? 'green.3' : 'white'}
                                ref={hoveredCU.ref}
                                fw={500}
                            >
                                Contact Us
                            </Text>
                        </Button>
                    </Group>
                    <Group justify='flex-end'>
                        <Burger
                            opened={opened}
                            onClick={handleBurger}
                            hiddenFrom='md'
                        />
                    </Group>
                </Grid.Col>
            </Grid>
        </>
    );
};

export default SiteNav;
