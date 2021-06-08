import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            600: '#2D415A'
        },
        blue: {
            900: '#041832',
            800: '#051D3B',
            400: '#5081FB'
        }
    },
    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },
    styles: {
        global: {
            body: {
                bg: 'blue.800',
                color: 'white'
            }
        }
    }
})
