import { useEffect, useRef } from 'react';
import {
    Grid,
    Title,
    Text,
    Button,
    Center,
    Image,
    Stack,
    Box,
    Tabs,
    Card,
    Rating,
    Avatar,
    Group,
} from '@mantine/core';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import infra1 from '../assets/infa1.jpg';
import infra2 from '../assets/infa2.jpg';
import infra3 from '../assets/infra3.jpg';
import cons1 from '../assets/con1.jpg';
import cons2 from '../assets/cons2.jpg';
import cons3 from '../assets/cons3.jpg';
import dc1 from '../assets/dc1.jpg';
import dc2 from '../assets/dc2.jpg';
import dc3 from '../assets/dc3.jpg';
import edu1 from '../assets/edu1.jpg';
import edu2 from '../assets/edu2.jpg';
import edu3 from '../assets/edu3.jpg';
import sports1 from '../assets/sports1.jpg';
import sports2 from '../assets/sports2.jpg';
import sports3 from '../assets/sports3.jpg';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.jpg';
import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.png';
import client7 from '../assets/client7.png';
import client8 from '../assets/client8.jpg';
import client9 from '../assets/client9.jpg';
import client10 from '../assets/client10.jpg';
import client11 from '../assets/client11.png';
import client12 from '../assets/client12.jpg';

const testimonials = [
    {
        name: 'Design Manager',
        title: 'Urban Constructs - SYDNEY',
        review: 'FeelDX brought our vision to life with precision and clarity. Their visuals helped us communicate complex ideas to stakeholders effortlessly.',
        rating: 5.0,
    },
    {
        name: 'Marketing Director',
        title: 'Vista Developments - MELBOURNE',
        review: 'Their storytelling approach added depth to our campaign. The team was proactive, creative, and aligned with our branding goals.',
        rating: 4.8,
    },
    {
        name: 'Project Lead',
        title: 'EcoBuilt Group - BRISBANE',
        review: 'We were impressed by how quickly FeelDX understood our requirements. Their interactive applications made our presentations stand out.',
        rating: 4.7,
    },
    {
        name: 'Senior Architect',
        title: 'MODFORM Studio - PERTH',
        review: 'The 3D visualisation work was exceptional — realistic, detailed, and immersive. Our clients were blown away.',
        rating: 5.0,
    },
    {
        name: 'Construction Manager',
        title: 'Struxure Projects - ADELAIDE',
        review: 'FeelDX’s team integrated seamlessly into our workflow. Their understanding of construction phasing made collaboration easy and efficient.',
        rating: 4.6,
    },
    {
        name: 'Creative Director',
        title: 'NordVisuals - GOLD COAST',
        review: 'From concept to execution, FeelDX exceeded expectations. Their team’s attention to narrative and visual impact was spot-on.',
        rating: 4.9,
    },
    {
        name: 'Planning Consultant',
        title: 'CivicEdge Developments - CANBERRA',
        review: 'FeelDX simplified the planning review process with clear, engaging visuals. Their work made public consultations more effective and impactful.',
        rating: 4.7,
    },
    {
        name: 'Interior Designer',
        title: 'AURA Spaces - HOBART',
        review: 'The lighting and texture realism in the renders were stunning. FeelDX elevated our design pitches and won us more client approvals.',
        rating: 5.0,
    },
    {
        name: 'Virtual Design Coordinator',
        title: 'BuildSmart Group - DARWIN',
        review: 'We were looking for more than just visuals — and FeelDX delivered interactive tools that enhanced our stakeholder engagement.',
        rating: 4.8,
    },
    {
        name: 'Development Director',
        title: 'NextPhase Projects - SUNSHINE COAST',
        review: 'Their flexibility and responsiveness were exceptional. FeelDX delivered ahead of schedule without compromising quality.',
        rating: 4.9,
    },
    {
        name: 'Senior Engineer',
        title: 'Structura Systems - NEWCASTLE',
        review: 'FeelDX’s knowledge of infrastructure and build logic made the visualisations both beautiful and technically accurate.',
        rating: 4.6,
    },
    {
        name: 'Lead Consultant',
        title: 'GreenCity Planning - BENDIGO',
        review: 'Their work captured the essence of our sustainability goals in a visual format that inspired confidence in our investors.',
        rating: 5.0,
    },
    {
        name: 'Project Architect',
        title: 'Elevate Studios - BALLARAT',
        review: 'FeelDX turned our early-stage sketches into immersive walkthroughs. It helped our clients visualise the end result with confidence.',
        rating: 4.8,
    },
    {
        name: 'Construction Director',
        title: 'Axis Build Co - TOWNSVILLE',
        review: 'The visuals helped coordinate our internal teams and trades more effectively. It saved us time on-site and reduced confusion.',
        rating: 4.7,
    },
    {
        name: 'Client Liaison',
        title: 'Harper & Lee Property Group',
        review: 'Our clients often struggle with floorplans, but FeelDX’s interactive models made it easy for them to understand space and flow.',
        rating: 4.9,
    },
    {
        name: 'Operations Manager',
        title: 'Nexus Industrial - DANDENONG',
        review: 'FeelDX went above and beyond in tailoring the visual content to meet our operational needs and strict timelines.',
        rating: 4.6,
    },
    {
        name: 'Urban Planner',
        title: 'Eastline Council - LAUNCESTON',
        review: 'They delivered highly effective planning visuals that made community feedback sessions more productive and transparent.',
        rating: 5.0,
    },
    {
        name: 'Marketing Strategist',
        title: 'Pulse Living - CAIRNS',
        review: 'Their visual storytelling created an emotional connection with our buyers. It’s more than rendering — it’s persuasive communication.',
        rating: 4.9,
    },
    {
        name: 'BIM Manager',
        title: 'Integra Built - SHEPPARTON',
        review: 'FeelDX understands data-driven design. Their output worked seamlessly with our BIM workflows and supported informed decision-making.',
        rating: 4.8,
    },
];

const WhyPage = () => {
    const { width } = useViewportSize();
    const [scroll, scrollTo] = useWindowScroll();
    const autoplay = useRef(Autoplay({ delay: 5000, stopOnHover: true }));
    const autoplay1 = useRef(Autoplay({ delay: 5000, stopOnHover: true }));
    const autoplay2 = useRef(Autoplay({ delay: 5000, stopOnHover: true }));
    const autoplay3 = useRef(Autoplay({ delay: 5000, stopOnHover: true }));
    const autoplay4 = useRef(Autoplay({ delay: 5000, stopOnHover: true }));
    const autoplay5 = useRef(Autoplay({ delay: 3000, stopOnHover: true }));

    useEffect(() => {
        scrollTo({ y: 0, easing: 'ease-in-out' });
    }, [scrollTo]);

    const cards = testimonials.map((item) => (
        <Card h={300} w={320} px={'2rem'} key={item.name + item.title}>
            <Card.Section pt={'0.5rem'}>
                <Group>
                    <Avatar size={'3rem'} />
                    <Stack gap={0}>
                        <Text fw={600} size='1rem'>
                            {item.name}
                        </Text>
                        <Text size='xs'>{item.title}</Text>
                    </Stack>
                </Group>
            </Card.Section>
            <Card.Section pt={'1rem'} px={'0.5rem'}>
                <Text>{item.review}</Text>
            </Card.Section>

            <Card.Section pt={'1.25rem'} px={'0.5rem'}>
                <Rating
                    defaultValue={item.rating}
                    fractions={10}
                    size={'0.938rem'}
                    readOnly
                />
            </Card.Section>
        </Card>
    ));

    return (
        <Stack w={'100%'} gap={0}>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Title c={'green.5'}>Our Work</Title>
                        <Text>We help your vision become reality.</Text>
                        <Text pt={'1.25rem'}>
                            Our innovative software and project management
                            solutions have powered important and impressive
                            projects across an array of industries. Take a look
                            at what we have built with our incredible partners,
                            ranging from commercial, residential, government,
                            education and medical projects.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Title c={'green.5'}>Projects</Title>
                </Grid.Col>
                <Grid.Col span={12} mt={'1rem'}>
                    <Tabs defaultValue='construction'>
                        <Tabs.List>
                            <Tabs.Tab value='construction'>
                                Construction
                            </Tabs.Tab>
                            <Tabs.Tab value='data-centres'>
                                Data Centres
                            </Tabs.Tab>
                            <Tabs.Tab value='education'>Education</Tabs.Tab>
                            <Tabs.Tab value='retail'>Retail</Tabs.Tab>
                            <Tabs.Tab value='sports'>
                                Sports & Recreation
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value='construction'>
                            <Carousel
                                withIndicators
                                height='100%'
                                flex={1}
                                plugins={[autoplay1.current]}
                                onMouseEnter={autoplay1.current.stop}
                                onMouseLeave={() => autoplay1.current.play()}
                                emblaOptions={{
                                    loop: true,
                                    dragFree: true,
                                    align: 'center',
                                }}
                            >
                                <Carousel.Slide>
                                    <Image src={infra1} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={infra2} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={infra3} />
                                </Carousel.Slide>
                            </Carousel>
                        </Tabs.Panel>

                        <Tabs.Panel value='retail'>
                            <Carousel
                                withIndicators
                                height='100%'
                                flex={1}
                                emblaOptions={{
                                    loop: true,
                                    dragFree: true,
                                    align: 'center',
                                }}
                            >
                                <Carousel.Slide>
                                    <Image src={cons1} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={cons2} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={cons3} />
                                </Carousel.Slide>
                            </Carousel>
                        </Tabs.Panel>

                        <Tabs.Panel value='data-centres'>
                            <Carousel
                                withIndicators
                                height='100%'
                                flex={1}
                                plugins={[autoplay2.current]}
                                onMouseEnter={autoplay2.current.stop}
                                onMouseLeave={() => autoplay2.current.play()}
                                emblaOptions={{
                                    loop: true,
                                    dragFree: true,
                                    align: 'center',
                                }}
                            >
                                <Carousel.Slide>
                                    <Image src={dc1} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={dc2} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={dc3} />
                                </Carousel.Slide>
                            </Carousel>
                        </Tabs.Panel>

                        <Tabs.Panel value='education'>
                            <Carousel
                                withIndicators
                                height='100%'
                                flex={1}
                                plugins={[autoplay3.current]}
                                onMouseEnter={autoplay3.current.stop}
                                onMouseLeave={() => autoplay3.current.play()}
                                emblaOptions={{
                                    loop: true,
                                    dragFree: true,
                                    align: 'center',
                                }}
                            >
                                <Carousel.Slide>
                                    <Image src={edu1} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={edu2} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={edu3} />
                                </Carousel.Slide>
                            </Carousel>
                        </Tabs.Panel>

                        <Tabs.Panel value='sports'>
                            <Carousel
                                withIndicators
                                height='100%'
                                flex={1}
                                plugins={[autoplay4.current]}
                                onMouseEnter={autoplay4.current.stop}
                                onMouseLeave={() => autoplay4.current.play()}
                                emblaOptions={{
                                    loop: true,
                                    dragFree: true,
                                    align: 'center',
                                }}
                            >
                                <Carousel.Slide>
                                    <Image src={sports1} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={sports2} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image src={sports3} />
                                </Carousel.Slide>
                            </Carousel>
                        </Tabs.Panel>
                    </Tabs>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 20}>
                <Grid.Col span={width >= 768 ? 12 : 12} pt={'3.125rem'}>
                    <Stack>
                        <Title c={'green.5'}>Testimonials</Title>
                        <Carousel
                            slideSize='25%'
                            height={300}
                            controlsOffset='lg'
                            controlSize={21}
                            withControls
                            withIndicators={false}
                            slideGap={10}
                            plugins={[autoplay5.current]}
                            onMouseEnter={autoplay5.current.stop}
                            onMouseLeave={() => autoplay5.current.play()}
                            emblaOptions={{
                                align: 'center',
                                slidesToScroll: 1,
                            }}
                        >
                            {cards.map((card) => (
                                <Carousel.Slide>{card}</Carousel.Slide>
                            ))}
                        </Carousel>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid
                mt={'3.125rem'}
                px={width >= 1024 ? '12.5rem' : 25}
                bg={'white'}
            >
                <Grid.Col span={width >= 768 ? 6 : 12} pt={'3.125rem'}>
                    <Stack>
                        <Title c={'green.5'}>Our Clients</Title>
                        <Text pt={'1.25rem'} c={'black'} fw={500}>
                            We help businesses thrive with cutting-edge
                            technology and project control solutions and
                            continue to work with an incredible portfolio of
                            clients.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid
                py={'3.125rem'}
                px={width >= 1024 ? '12.5rem' : 25}
                bg={'white'}
            >
                <Grid.Col span={12}>
                    <Carousel
                        withIndicators
                        height={'9.375rem'}
                        flex={1}
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={() => autoplay.current.play()}
                        emblaOptions={{
                            loop: true,
                            dragFree: true,
                            align: 'center',
                        }}
                    >
                        <Carousel.Slide>
                            <Grid>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client1}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client2}
                                            fit='scale-down'
                                            w={50}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client3}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client4}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                            </Grid>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Grid>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client5}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client6}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client7}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client8}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                            </Grid>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Grid>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client9}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client10}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client11}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                                <Grid.Col
                                    span={
                                        width < 375 ? 12 : width < 768 ? 6 : 3
                                    }
                                    h={150}
                                >
                                    <Center maw={'100%'} h={'100%'}>
                                        <Image
                                            src={client12}
                                            fit='scale-down'
                                            w={100}
                                        />
                                    </Center>
                                </Grid.Col>
                            </Grid>
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default WhyPage;
