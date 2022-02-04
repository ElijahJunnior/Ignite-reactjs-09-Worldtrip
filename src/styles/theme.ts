import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        dark: {
            body: baseTheme.colors.black,
            text: baseTheme.colors.red[500],
            info: baseTheme.colors.green[500]
        },
        light: {
            body: baseTheme.colors.white,
            text: '',
            info: ''
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    }
})