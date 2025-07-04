import { Grid, Title, Text, Button, Image, Center } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import aboutus from '../assets/aboutus.jpg';

const About = ({ targetRef }) => {
    const { width } = useViewportSize();

    return (
        <Grid
            pt={'3.125rem'}
            px={width >= 1024 ? '12.5rem' : 25}
            h={'50vh'}
            ref={targetRef}
        >
            <Grid.Col span={width > 1024 ? 6 : 12}>
                <Title>About Us</Title>
                <Text pt={'1.25rem'}>
                    FeelDX stands as a global assembly of creative experts,
                    reshaping the way individuals interact with urban
                    environments and infrastructure. We redefine how your
                    audience perceives your project by integrating cutting-edge
                    visualisation and interactive technologies.
                </Text>
                <Text pt={'1.25rem'} hidden={width > 1024 ? false : true}>
                    Our approach blends strategy, storytelling, creative
                    technology, and experimentation. This dynamic combination is
                    evident in our work, which spans various clients, sectors,
                    and project phases. We pride ourselves on adapting these
                    elements seamlessly to create engaging content that leaves a
                    lasting impact.
                </Text>
                <Text pt={'1.25rem'} hidden={width > 1024 ? false : true}>
                    Whether it's a complex construction project or the
                    realisation of a compelling vision, we thrive in
                    transforming ideas into reality. From improving existing
                    systems to constructing something entirely new, serving
                    local communities, or contributing to education, our
                    innovative project planning methodology and visual media
                    technology breathe life into every project we undertake.
                </Text>
                <Button mt={'1.25rem'} component={Link} to='/about'>
                    Learn More <ArrowRight size={20} />
                </Button>
            </Grid.Col>
            <Grid.Col span={6} hidden={width > 1024 ? false : true}>
                <Center>
                    <Image
                        src={aboutus}
                        radius={'md'}
                        m={'3rem'}
                        w={'28.125rem'}
                    />
                </Center>
            </Grid.Col>
        </Grid>
    );
};

export default About;
