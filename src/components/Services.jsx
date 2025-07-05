import { Grid, Title, Text, Button, Center, Image, Box } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
// import { Link } from '@tanstack/react-router';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import services from '../assets/services.jpg';

const Services = ({ targetRef }) => {
    const { width } = useViewportSize();

    return (
        <Box mt={'10rem'}>
            <Grid
                pt={'3.125rem'}
                px={width >= 1024 ? '12.5rem' : 25}
                h={'60vh'}
                ref={targetRef}
                mt={width > 1024 ? '12rem' : 0}
            >
                <Grid.Col span={width > 1024 ? 6 : 12}>
                    <Title>Services</Title>
                    <Text pt={'1.25rem'}>
                        FeelDX specialises in crafting immersive visual
                        experiences through cutting-edge 3D visualisation and
                        creative technologies. Tailoring specialised services to
                        diverse sectors, our niche teams elevate project success
                        by aligning with unique client needs. Storytelling is
                        integral, woven into our content strategy established
                        through a meticulous discovery process, resulting in
                        engaging visual content.
                    </Text>
                    <Text pt={'1.25rem'} hidden={width > 1024 ? false : true}>
                        Our user-centric design and development of interactive
                        applications amplify the impact of communication. While
                        maintaining enduring partnerships in construction, our
                        dynamic team continues to evolve, creating high-impact
                        and immersive content experiences for businesses in new
                        and emerging markets.
                    </Text>
                    <Button mt={'1.25rem'} component={Link} to={'/services'}>
                        Learn More <ArrowRight size={20} />
                    </Button>
                </Grid.Col>
                <Grid.Col span={6} hidden={width > 1024 ? false : true}>
                    <Center>
                        <Image
                            src={services}
                            radius={'md'}
                            m={'2rem'}
                            w={'28.125rem'}
                        />
                    </Center>
                </Grid.Col>
            </Grid>
        </Box>
    );
};

export default Services;
