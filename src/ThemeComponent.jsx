import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

const theme = createTheme({
    focusRing: 'never',
    white: '#FFFCFC',
    black: '#242424',
    colors: {
        green: [
            '#f5f7ee',
            '#e9ece3',
            '#d2d6c6',
            '#b9c0a7',
            '#a4ac8c',
            '#96a07b',
            '#8f9b71',
            '#7c865f',
            '#6c7651',
            '#5d6742',
        ],
    },
    primaryShade: 8,
    primaryColor: 'green',
    autoContrast: true,
    luminanceThreshold: 0.2,
    defaultRadius: 'sm',
});

const ThemeComponent = ({ children }) => {
    return (
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <ModalsProvider />
            {children}
        </MantineProvider>
    );
};

export default ThemeComponent;
