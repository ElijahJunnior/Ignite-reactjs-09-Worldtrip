import { extendTheme, theme as baseTheme } from '@chakra-ui/react';



// BREAKPOINTS
//
//     sm : 30em = Menor que  480px
//     md : 48em = Menor que  768px
//     lg : 62em = Menor que  992px
//     xl : 80em = Menor que 1280px
//     2xl: 96em = Menor que 1516px

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
    sizes: {
        minWidth: "350px",
        maxWidth: "1440px"
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    }
})