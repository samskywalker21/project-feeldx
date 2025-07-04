import { Group, Button, Text, Burger, Stack } from '@mantine/core';
import { useHover, useDisclosure, useViewportSize } from '@mantine/hooks';
import { modals } from '@mantine/modals';

import ContactForm from './ContactForm';

const HeroNav = ({ about, services, why, scroll }) => {
    const hoveredAU = useHover();
    const hoveredS = useHover();
    const hoveredW = useHover();
    const hoveredCU = useHover();
    const [opened] = useDisclosure(false);
    const { width } = useViewportSize();

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
                            // component={Link}
                            // to={'/about'}
                            onClick={() => {
                                scroll({ y: 0 });
                                modals.closeAll();
                            }}
                        >
                            Home
                        </Text>
                    </Button>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            // component={Link}
                            // to={'/about'}
                            onClick={() => {
                                about();
                                modals.closeAll();
                            }}
                        >
                            About Us
                        </Text>
                    </Button>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            // component={Link}
                            // to={'/services'}
                            onClick={() => {
                                services();
                                modals.closeAll();
                            }}
                        >
                            Services
                        </Text>
                    </Button>
                    <Button variant='transparent'>
                        <Text
                            c={'white'}
                            fw={500}
                            // component={Link}
                            // to={'/why'}
                            onClick={() => {
                                why();
                                modals.closeAll();
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
            <Group justify='flex-end' wrap='nowrap' visibleFrom='md'>
                <Button variant='transparent'>
                    <Text
                        c={hoveredAU.hovered ? 'green.3' : 'white'}
                        ref={hoveredAU.ref}
                        fw={500}
                        // component={Link}
                        // to={'/about'}
                        onClick={about}
                    >
                        About Us
                    </Text>
                </Button>
                <Button variant='transparent'>
                    <Text
                        c={hoveredS.hovered ? 'green.3' : 'white'}
                        ref={hoveredS.ref}
                        fw={500}
                        // component={Link}
                        // to={'/services'}
                        onClick={services}
                    >
                        Services
                    </Text>
                </Button>
                <Button variant='transparent'>
                    <Text
                        c={hoveredW.hovered ? 'green.3' : 'white'}
                        ref={hoveredW.ref}
                        fw={500}
                        // component={Link}
                        // to={'/why'}
                        onClick={why}
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
        </>
    );
};

export default HeroNav;
