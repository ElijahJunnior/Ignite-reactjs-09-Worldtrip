import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                background: "light.text",
                color: "dark.text"
            }
        }
    },
    colors: {
        base: {
            highlight: '#FFBA08'
        },
        dark: {
            body: baseTheme.colors.black,
            text: '#47585B',
            info: '#999999'
        },
        light: {
            body: baseTheme.colors.white,
            text: '#F5F8FA',
            info: '#DADADA'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    }
})