import { Image, Grid } from '@mantine/core';
import HeroNav from './HeroNav';
import { useWindowScroll } from '@mantine/hooks';
import logo from '../assets/logoWhite.png';

const HeroHeader = ({ about, services, why }) => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Grid
                w={'100%'}
                // pt={'0.625rem'}
                px={10}
                style={{ position: 'fixed', zIndex: 100 }}
                bg={scroll.y > 50 ? 'black' : 'transparent'}
            >
                <Grid.Col span={5}>
                    <Image
                        src={logo}
                        w={'9.375rem'}
                        onClick={() => scrollTo({ y: 0 })}
                    />
                </Grid.Col>
                <Grid.Col span={7} pt={'1.563rem'}>
                    <HeroNav
                        about={about}
                        services={services}
                        why={why}
                        scroll={scrollTo}
                    />
                </Grid.Col>
            </Grid>
        </>
    );
};

export default HeroHeader;
