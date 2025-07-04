import { Grid, Title, Text, Image, Center, Button } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
// import { Link } from '@tanstack/react-router';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import why from '../assets/why.jpg';

const Why = ({ targetRef }) => {
    const { width } = useViewportSize();

    return (
        <Grid
            pt={'3.125rem'}
            px={width >= 1024 ? '12.5rem' : 25}
            h={'60vh'}
            ref={targetRef}
            mt={width > 1024 ? '5rem' : 0}
        >
            <Grid.Col span={width > 1024 ? 6 : 12}>
                <Title>Why FEELDX</Title>
                <Text pt={'1.25rem'}>We help your vision become reality.</Text>
                <Text pt={'1.25rem'}>
                    Our innovative software and project management solutions
                    have powered important and impressive projects across an
                    array of industries. Take a look at what we have built with
                    our incredible partners, ranging from commercial,
                    residential, government, education and medical projects.
                </Text>
                <Button mt={'1.25rem'} component={Link} to={'/why'}>
                    Learn More <ArrowRight size={20} />
                </Button>
            </Grid.Col>
            <Grid.Col span={6} hidden={width > 1024 ? false : true}>
                <Center>
                    <Image src={why} radius={'md'} w={'28.125rem'} />
                </Center>
            </Grid.Col>
        </Grid>
    );
};

export default Why;
