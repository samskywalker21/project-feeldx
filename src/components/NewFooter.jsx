import { Container, Group, Stack, Text, ActionIcon } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Facebook, Instagram, Computer, Mail } from 'lucide-react';
const NewFooter = () => {
    const tosHover = useHover();
    const privHover = useHover();
    const fbHover = useHover();
    const instaHover = useHover();
    const compHover = useHover();
    const mailHover = useHover();

    return (
        <Container fluid px={0} pt={'1.875rem'}>
            <Stack align='center'>
                <Group>
                    <ActionIcon
                        variant='transparent'
                        ref={fbHover.ref}
                        c={fbHover.hovered ? 'white' : 'green.5'}
                        component='a'
                        href='https://www.facebook.com/feeldx'
                    >
                        <Facebook />
                    </ActionIcon>
                    <ActionIcon
                        variant='transparent'
                        ref={instaHover.ref}
                        c={instaHover.hovered ? 'white' : 'green.5'}
                        component='a'
                        href='https://www.instagram.com/feeldx/'
                    >
                        <Instagram />
                    </ActionIcon>
                    <ActionIcon
                        variant='transparent'
                        ref={compHover.ref}
                        c={compHover.hovered ? 'white' : 'green.5'}
                        component='a'
                        href='mailto:contact@feeldx.com.au'
                    >
                        <Computer />
                    </ActionIcon>
                    <ActionIcon
                        variant='transparent'
                        ref={mailHover.ref}
                        c={mailHover.hovered ? 'white' : 'green.5'}
                        component='a'
                        href='https://www.shootproof.com/legal/terms-of-use/'
                    >
                        <Mail />
                    </ActionIcon>
                </Group>
                <Stack align='center'>
                    <Text>WATERMAN BUSINESS CENTRE</Text>
                    <Text mt={'-1.25rem'}>Suite 70, 44 LAKEVIEW DR</Text>
                    <Text mt={'-1.25rem'}>SCORESBY 3179</Text>
                    <Text
                        mt={'-1.25rem'}
                        component='a'
                        href='tel:1800333539'
                        c={'green.5'}
                    >
                        1800 333 539
                    </Text>
                </Stack>
                <Group>
                    <Text
                        size='0.813rem'
                        ref={tosHover.ref}
                        td={tosHover.hovered ? 'underline' : 'none'}
                        component='a'
                        href='https://www.shootproof.com/legal/terms-of-use/'
                    >
                        Terms of Service
                    </Text>
                    <Text>|</Text>
                    <Text
                        size='0.813rem'
                        ref={privHover.ref}
                        td={privHover.hovered ? 'underline' : 'none'}
                        component='a'
                        href='https://www.shootproof.com/legal/privacy-policy/'
                    >
                        Privacy Policy
                    </Text>
                </Group>
            </Stack>
        </Container>
    );
};

export default NewFooter;
