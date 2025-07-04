import { useEffect } from 'react';
import {
    Grid,
    Title,
    Text,
    Button,
    Center,
    Image,
    Stack,
    Box,
} from '@mantine/core';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import aboutusbanner from '../assets/aboutusbanner.jpg';

const AboutPage = () => {
    const { width } = useViewportSize();
    const [scroll, scrollTo] = useWindowScroll();

    useEffect(() => {
        scrollTo({ y: 0, easing: 'ease-in-out' });
    }, [scrollTo]);

    return (
        <Stack w={'100%'}>
            <Box my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid>
                    <Grid.Col span={width >= 768 ? 6 : 12}>
                        <Stack>
                            <Title c={'green.5'}>About Us</Title>
                            <Text>
                                FeelDX stands as a global assembly of creative
                                experts, reshaping the way individuals interact
                                with urban environments and infrastructure. We
                                redefine how your audience perceives your
                                project by integrating cutting-edge
                                visualisation and interactive technologies.
                            </Text>
                            <Text pt={'1.25rem'}>
                                Our approach blends strategy, storytelling,
                                creative technology, and experimentation. This
                                dynamic combination is evident in our work,
                                which spans various clients, sectors, and
                                project phases. We pride ourselves on adapting
                                these elements seamlessly to create engaging
                                content that leaves a lasting impact.
                            </Text>
                            <Text pt={'1.25rem'}>
                                Whether it's a complex construction project or
                                the realisation of a compelling vision, we
                                thrive in transforming ideas into reality. From
                                improving existing systems to constructing
                                something entirely new, serving local
                                communities, or contributing to education, our
                                innovative project planning methodology and
                                visual media technology breathe life into every
                                project we undertake.
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Image src={aboutusbanner} mt={'1.875rem'} />
            </Box>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Title c={'green.5'}>Our Vision and Mission</Title>
                        <Text>
                            Our vision is to help bring your vision to life.
                        </Text>
                        <Text pt={'1.25rem'}>
                            We are dedicated to our clients' project success,
                            guided by a steadfast belief in the power of
                            innovative content solutions. We believe in the
                            power of innovation and strive to provide the
                            best-in-class visual and integrated project planning
                            solutions and services to help our clients turn
                            their visions into reality.
                        </Text>
                        <Text pt={'1.25rem'}>
                            Our ultimate goal is to establish ourselves as the
                            foremost 3D visualisation and creative technology
                            agency dedicated to helping clients strategically
                            plan, visualise, and successfully transform projects
                            into immersive experiences for maximum impact and
                            successful outcomes.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Stack my={'3.125rem'} px={width >= 1024 ? '12.5rem' : '1.563rem'}>
                <Title c={'green.5'}>Our Core Values</Title>
                <Grid pr={100}>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Innovation
                            </Text>
                            <Text>
                                Embrace continuous exploration and integration
                                of cutting-edge technologies to drive digital
                                transformation and stay at the forefront of
                                project planning and visualization.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Client-Centric Approach
                            </Text>
                            <Text>
                                Prioritize understanding and addressing unique
                                client needs, fostering enduring partnerships
                                through tailored solutions and exceptional
                                service.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Adaptability
                            </Text>
                            <Text>
                                Embrace ongoing evolution and adaptation of
                                technologies, demonstrating agility in response
                                to industry changes and client requirements.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Collaboration
                            </Text>
                            <Text>
                                Foster a culture of teamwork and open
                                communication, recognizing that collaboration
                                enhances creativity, efficiency, and overall
                                project success.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Excellence
                            </Text>
                            <Text>
                                Strive for excellence in every aspect of project
                                planning and visualization, maintaining high
                                standards of quality, accuracy, and creativity.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Integrity
                            </Text>
                            <Text>
                                Uphold the highest ethical standards in all
                                interactions, ensuring transparency, honesty,
                                and trustworthiness in our relationships with
                                clients and partners.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Continuous Learning
                            </Text>
                            <Text>
                                Cultivate a learning culture that encourages the
                                acquisition of new skills and knowledge, staying
                                ahead of industry trends and advancements.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Inclusivity
                            </Text>
                            <Text>
                                Embrace diversity and create an inclusive
                                environment that values different perspectives,
                                fostering a rich and dynamic workplace culture.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={width > 1024 ? 4 : width > 425 ? 6 : 12}
                        mt={'1.5rem'}
                    >
                        <Stack>
                            <Text size={'1.5rem'} c={'green.3'}>
                                Passion For Impact
                            </Text>
                            <Text>
                                Approach each project with enthusiasm and a
                                commitment to making a positive impact on
                                clients, industries, and the community through
                                transformative digital solutions.
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default AboutPage;
