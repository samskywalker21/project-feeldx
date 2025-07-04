import { BackgroundImage, Container, Box, Button } from '@mantine/core';
import {
    useViewportSize,
    useScrollIntoView,
    useWindowScroll,
} from '@mantine/hooks';
import HeroHeader from '../components/HeroHeader';
import hero from '../assets/hero.png';
import HeroCallToAction from '../components/HeroCallToAction';
import About from '../components/About';
import Services from '../components/Services';
import Why from '../components/Why';
import NewFooter from '../components/NewFooter';

const HeroBody = () => {
    const { width } = useViewportSize();
    const aboutScroll = useScrollIntoView({ offset: 60 });
    const servicesScroll = useScrollIntoView({ offset: 60 });
    const whyScroll = useScrollIntoView({ offset: 60 });

    return (
        <>
            <HeroHeader
                about={aboutScroll.scrollIntoView}
                services={servicesScroll.scrollIntoView}
                why={whyScroll.scrollIntoView}
            />
            <Container fluid px={0}>
                <BackgroundImage src={width > 425 ? hero : ''}>
                    <Container fluid mih={'100vh'}>
                        <HeroCallToAction />
                    </Container>
                </BackgroundImage>
                <About targetRef={aboutScroll.targetRef} />
                <Services targetRef={servicesScroll.targetRef} />
                <Why targetRef={whyScroll.targetRef} />
                <NewFooter />
            </Container>
        </>
    );
};

export default HeroBody;
