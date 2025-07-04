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
    Accordion,
} from '@mantine/core';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import servicesbanner from '../assets/servicesbanner.jpg';

const ServicesPage = () => {
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
                            <Title c={'green.5'}>Our Services</Title>
                            <Text>
                                FeelDX specialises in crafting immersive visual
                                experiences through cutting-edge 3D
                                visualisation and creative technologies.
                                Tailoring specialised services to diverse
                                sectors, our niche teams elevate project success
                                by aligning with unique client needs.
                                Storytelling is integral, woven into our content
                                strategy established through a meticulous
                                discovery process, resulting in engaging visual
                                content.
                            </Text>
                            <Text mt={'1.25rem'}>
                                Our user-centric design and development of
                                interactive applications amplify the impact of
                                communication. While maintaining enduring
                                partnerships in construction, our dynamic team
                                continues to evolve, creating high-impact and
                                immersive content experiences for businesses in
                                new and emerging markets.
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Image src={servicesbanner} mt={'1.875rem'} />
            </Box>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Title c={'green.5'}>Your partner for success</Title>
                        <Text>
                            Our team of skilled designers and project
                            consultants possess a deep understanding of the
                            markets in which we operate and are committed to
                            being at the forefront of industry trends by
                            utilising data and insights to develop unparalleled
                            solutions for our clients.
                        </Text>
                        <Text mt={'1.25rem'}>
                            We know when to question, how to challenge, and what
                            to recommend.
                        </Text>
                        <Text mt={'1.25rem'}>
                            FeelDX brings together a huge diversity of
                            expertise. It is where the disciplines overlap that
                            the magic happens, and the idea of ‘solving
                            together’ is a shorthand to FeelDX's deeply
                            collaborative culture, which is key to our success.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Title c={'green.5'}>Capabilities</Title>
                        <Text size={'1.5rem'} c={'green.3'} mt={'1.5rem'}>
                            Visualisations
                        </Text>
                        <Text mt={'1.25rem'}>
                            Our work blends strategy, storytelling, and creative
                            technology across diverse sectors and projects.
                            Specialising in storytelling, our design team
                            unravels intricate concepts, translating them into
                            immersive content that establishes personal
                            connections. From strategy and content planning to
                            creative technologies, we deliver engaging
                            experiences across various projects, creating a
                            unique blend of innovation and storytelling.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Accordion w={'100%'}>
                        <Accordion.Item value='item-1'>
                            <Accordion.Control>
                                <Text size={'1.25rem'} fw={600}>
                                    BIM Services - 3D, 4D, 5D, 7D
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        Our comprehensive BIM models integrate
                                        preconstruction planning and programme
                                        schedules to create staging plans and
                                        construction sequences for your project.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-2'>
                            <Accordion.Control>
                                <Text size={'1.25rem'} fw={600}>
                                    Multimedia
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        Multimedia visualisation provides
                                        innovative visuals, including
                                        photo-realistic architectural
                                        renderings, photorealistic fly through
                                        animations for virtual reality, and
                                        portrayal videos.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-3'>
                            <Accordion.Control>
                                <Text size={'1.25rem'} fw={600}>
                                    Interior Design
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        Our creative Interior Designers work
                                        with you to conceptualise, plan and
                                        execute the interior design for your
                                        spaces, from the conceptual stages of a
                                        project to post-construction.
                                    </Text>
                                    <Text mt={'1.25rem'}>
                                        We collaborate with designers,
                                        architects, landscapers, builders,
                                        developers, and brand managers to
                                        achieve stunning interior spaces.
                                    </Text>
                                    <Text mt={'1.25rem'}>
                                        Our attention to detail, meticulous
                                        finishes and eye for design combine to
                                        produce powerful and unique design
                                        results that truly embody our clients
                                        and their brand.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Text size={'1.5rem'} c={'green.3'} mt={'1.5rem'}>
                            Project Control and Forensic Aanalysis
                        </Text>
                        <Text>
                            Our holistic approach to project management includes
                            Programmes (Tender, Construction, Contract, EOI),
                            Status Reporting, Methodology Statements, Scheduling
                            Calendar, Program Reviews, Business Intelligence and
                            Forensic Planning. We harness the power of 3D, 4D,
                            5D and 7D BIM and industry expertise to deliver
                            successful project builds.
                        </Text>
                        <Text mt={'1.25rem'}>
                            We offer independent advice and reports on project
                            management, contract administration, programming,
                            and cost management. Our expertise helps clients
                            develop strategies to manage disputes.
                        </Text>
                        <Text mt={'1.25rem'}>
                            Our forensic analysis service supports small to
                            large projects in the construction industry. We
                            analyse records and data to assist with negotiation,
                            settlement, litigation, and alternative dispute
                            resolution.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Text size={'1.5rem'} c={'green.3'} mt={'1.5rem'}>
                            AEC Industries
                        </Text>
                        <Text>
                            Our expert team works closely with you through the
                            entire lifecycle of your design, construction and
                            built environment project. Sophisticated
                            visualisation software takes your project to the
                            next level.
                        </Text>
                        <Text mt={'1.25rem'}>
                            FeelDX continues to form strategic partnerships with
                            architects, engineers and developers to execute
                            hundreds of building projects successfully. Our
                            highly qualified project control and project
                            management consultants are dedicated to providing
                            comprehensive support throughout every project
                            stage.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Text size={'1.5rem'} c={'green.3'} mt={'1.5rem'}>
                            Construction Life Cycle
                        </Text>
                        <Text>
                            We specialise in working with businesses within the
                            architecture, engineering, and construction (AEC)
                            industry, offering advanced project planning and
                            control solutions to secure contracts and ensure
                            project success.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Accordion w={'100%'}>
                        <Accordion.Item value='item-1'>
                            <Accordion.Control>
                                <Text size={'1rem'} c={'green.3'}>
                                    Stage 1
                                </Text>
                                <Text mt={'0.5rem'} size={'1.25rem'} fw={600}>
                                    Master Plan Phase- Property Developers
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        We collaborate with property developers
                                        to assist them throughout the entire
                                        lifecycle of complex construction
                                        projects. Our team of experts, utilising
                                        advanced technology, provides project
                                        planning and control solutions, starting
                                        from the initial concept to the
                                        successful completion of the project.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-2'>
                            <Accordion.Control>
                                <Text size={'1rem'} c={'green.3'}>
                                    Stage 2
                                </Text>
                                <Text mt={'0.5rem'} size={'1.25rem'} fw={600}>
                                    Concept Phase - Project Managers &
                                    Superintendents
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        We partner with Superintendents and
                                        Project Management Firms to offer
                                        advanced project planning and control
                                        solutions. Our 4D and 5D project control
                                        solutions aid in identifying potential
                                        risks, increasing efficiency, and
                                        ensuring on-time and budget completion
                                        of the project.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-3'>
                            <Accordion.Control>
                                <Text size={'1rem'} c={'green.3'}>
                                    Stage 3
                                </Text>
                                <Text mt={'0.5rem'} size={'1.25rem'} fw={600}>
                                    Design Phase - Architects & Engineers
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        We assist architects and engineers in
                                        bringing construction and built
                                        environment projects to fruition. Our
                                        team ensures the preparation and
                                        conversion of plans, from tender to
                                        construction, are completed to the
                                        highest standards with every detail
                                        covered.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-4'>
                            <Accordion.Control>
                                <Text size={'1rem'} c={'green.3'}>
                                    Stage 4
                                </Text>
                                <Text mt={'0.5rem'} size={'1.25rem'} fw={600}>
                                    Tender Phase - Builders
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        We assist builders in simplifying
                                        complex project schedules through
                                        advanced 3D visualization and 4D/5D BIM
                                        technology, resulting in visually
                                        stunning and successful tenders. Our
                                        project control solutions also aid in
                                        ensuring the timely delivery of
                                        projects.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-5'>
                            <Accordion.Control>
                                <Text size={'1rem'} c={'green.3'}>
                                    Stage 5
                                </Text>
                                <Text mt={'0.5rem'} size={'1.25rem'} fw={600}>
                                    Construction and Development Phase- Multiple
                                    Teams
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        We use 4D and 5D BIM to create realistic
                                        and interactive simulations, which allow
                                        all stakeholders to understand the
                                        construction process, anticipate
                                        problems, and make informed decisions to
                                        mitigate risks and improve productivity.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='item-6'>
                            <Accordion.Control>
                                <Text size={'1rem'} c={'green.3'}>
                                    Stage 6
                                </Text>
                                <Text mt={'0.5rem'} size={'1.25rem'} fw={600}>
                                    Project Completion Phase
                                </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Box pr={width > 768 ? '50%' : 0}>
                                    <Text>
                                        We offer post-project services using 7D
                                        BIM to monitor and optimise the
                                        sustainability and efficiency of your
                                        building or space. Our expertise and
                                        data provide valuable recommendations
                                        for continued performance improvement
                                        after project completion.
                                    </Text>
                                </Box>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Text size={'1.5rem'} c={'green.3'} mt={'1.5rem'}>
                            Data Centres
                        </Text>
                        <Text>
                            We pride ourselves on our wealth of knowledge and
                            competent ability to tailor our services to the most
                            advanced of organisations and builds. Our recent
                            growth within the AEC industry has propelled us
                            further into the data centre sector, and we are
                            excited to share our ongoing successes with our
                            partners in the industry.
                        </Text>
                        <Text mt={'1.25rem'}>
                            With high-end knowledge and long-standing
                            partnerships in the AEC industry, we are confident
                            in our approach to best practice project controls
                            and planning, and in the provision of industry
                            leading data centre programs.
                        </Text>
                        <Text mt={'1.25rem'}>
                            We understand organisational needs, as well as offer
                            you the guidance and support in data centre
                            planning, ongoing management and build process.
                        </Text>
                        <Text mt={'1.25rem'}>
                            Data Centre planning, construction, and project
                            management is a complex process that requires expert
                            knowledge and skill to execute effectively. We have
                            a team of highly experienced data centre project
                            planning and control specialists. We understand the
                            specific organisational needs and requirements of
                            data centres, and we are confident in our ability to
                            deliver successful projects no matter the size or
                            scale.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid my={'3.125rem'} px={width >= 1024 ? '12.5rem' : 25}>
                <Grid.Col span={width >= 768 ? 6 : 12}>
                    <Stack>
                        <Text size={'1.5rem'} c={'green.3'} mt={'1.5rem'}>
                            Education and Training
                        </Text>
                        <Text>
                            At FeelDX, we leverage the latest technology to
                            craft tailored digital education and training
                            programs and courses. Our comprehensive suite of
                            services includes developing training strategies,
                            creating personalized training programs, reviewing
                            and designing infrastructure projects, and providing
                            project delivery and governance support.
                        </Text>
                        <Text mt={'1.25rem'}>
                            We collaborate closely with registered training
                            organisations (RTOs) and education providers to
                            produce multimedia content that supports holistic
                            student learning. Our technology allows for
                            customised and tailored programmes to meet
                            stakeholder content requirements and protocols.
                            We're proud to help clients develop impactful and
                            unique learning materials, such as graphics,
                            storyboards, videos, and interactive animations.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default ServicesPage;
