import { Stack, Title, Text, Button } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import ContactForm from './ContactForm';

const HeroCallToAction = () => {
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

    return (
        <Stack
            // mt={225}
            pt={'14.063rem'}
            ml={width > 1024 ? '2.5rem' : 0}
            align={width > 1024 ? 'flex-start' : 'center'}
        >
            <Title size={width > 1024 ? '4.375rem' : '2.5rem'} c={'white'}>
                Plan. Visualise.
            </Title>
            <Title
                size={width > 1024 ? '4.375rem' : '2.5rem'}
                c={'white'}
                mt={'-1.563rem'}
            >
                Transform.
            </Title>
            <Text
                mt={'1.25rem'}
                c={'white'}
                size={width > 1024 ? '2.188rem' : '1.2rem'}
            >
                End-to-end BIM, VR &
            </Text>
            <Text
                mt={'-0.938rem'}
                c={'white'}
                size={width > 1024 ? '2.188rem' : '1.2rem'}
            >
                Smart construction planning.
            </Text>
            <Button
                w={width > 1024 ? '25rem' : '15rem'}
                h={width > 1024 ? '4.688rem' : '4rem'}
                radius={'0.75rem'}
                mt={'2rem'}
                size={width > 1024 ? '1.563rem' : '1.17rem'}
                onClick={handleContact}
            >
                Get a Free Consultation
            </Button>
        </Stack>
    );
};

export default HeroCallToAction;
