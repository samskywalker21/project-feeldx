import React from 'react';
import {
    ScrollArea,
    Container,
    Image,
    Flex,
    Title,
    Text,
    Grid,
    Space,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
import banner6 from '../assets/banner6.png';

const MainBody = () => {
    return (
        <>
            <ScrollArea h={'100%'} type='never' pt={{ lg: 110, base: 80 }}>
                <Container fluid w={'100%'} px={0}>
                    <Carousel
                        height={'100%'}
                        w={'100%'}
                        emblaOptions={{ loop: true }}
                    >
                        <Carousel.Slide>
                            <Image src={banner4} />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image src={banner5} />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image src={banner6} />
                        </Carousel.Slide>
                    </Carousel>
                    <Grid
                        mt={'5rem'}
                        px={{ lg: '15rem', base: '1rem' }}
                        h={'30rem'}
                        style={{ border: '1px solid #D9D9D9' }}
                    >
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            px={{ base: '1rem', md: 0 }}
                        >
                            <Flex
                                w={'100%'}
                                justify='flex-start'
                                align='flex-start'
                                direction='column'
                                wrap='wrap'
                            >
                                <Title>Our Services</Title>
                                <Space h={'md'} />
                                <Text>
                                    FeelDX specialises in crafting immersive
                                    visual experiences through cutting-edge 3D
                                    visualisation and creative technologies.
                                    Tailoring specialised services to diverse
                                    sectors, our niche teams elevate project
                                    success by aligning with unique client
                                    needs. Storytelling is integral, woven into
                                    our content strategy established through a
                                    meticulous discovery process, resulting in
                                    engaging visual content.
                                </Text>
                                <Space h={'md'} />
                                <Text>
                                    Our user-centric design and development of
                                    interactive applications amplify the impact
                                    of communication. While maintaining enduring
                                    partnerships in construction, our dynamic
                                    team continues to evolve, creating
                                    high-impact and immersive content
                                    experiences for businesses in new and
                                    emerging markets.
                                </Text>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                    <Grid
                        mt={'5rem'}
                        px={{ lg: '15rem', base: '1rem' }}
                        h={'30rem'}
                        style={{ border: '1px solid #D9D9D9' }}
                    >
                        <Grid.Col
                            span={{ base: 12, md: 6 }}
                            px={{ base: '1rem', md: 0 }}
                        >
                            <Flex
                                w={'100%'}
                                justify='flex-start'
                                align='flex-start'
                                direction='column'
                                wrap='wrap'
                            >
                                <Title>Why FeelDX</Title>
                                <Space h={'md'} />
                                <Text>
                                    At FeelDX, we specialise in crafting
                                    immersive content using cutting-edge 3D
                                    technology and interactive design. Our
                                    sector-focused teams align with client goals
                                    to deliver visuals that do more than impress
                                    — they tell stories, drive engagement, and
                                    amplify communication impact. From
                                    construction to emerging industries, we turn
                                    complexity into clarity through innovation,
                                    collaboration, and compelling digital
                                    experiences.
                                </Text>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                    <Grid
                        mt={'5rem'}
                        px={{ lg: '15rem', base: '1rem' }}
                        h={'30rem'}
                        style={{ border: '1px solid #D9D9D9' }}
                    ></Grid>
                </Container>
            </ScrollArea>
        </>
    );
};

export default MainBody;
