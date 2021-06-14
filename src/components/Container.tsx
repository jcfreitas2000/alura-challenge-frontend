import { Box, BoxProps } from '@chakra-ui/react'

export function Container({ children, ...rest }: BoxProps): JSX.Element {
    return (
        <Box p={{ base: 4, md: 8 }} {...rest}>
            {children}
        </Box>
    )
}
