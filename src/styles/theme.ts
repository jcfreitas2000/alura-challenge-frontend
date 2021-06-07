import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            600: '#2D415A',
            900: '#051D3B'
        },
        blue: {
            900: '#051D3B',
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
                bg: 'blue.900',
                color: 'white'
            }
        }
    }
})
