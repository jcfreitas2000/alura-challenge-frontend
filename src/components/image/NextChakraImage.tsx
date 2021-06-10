import { chakra } from '@chakra-ui/react'

import Image from 'next/image'

export const ChakraNextImage = chakra(Image, {
    shouldForwardProp(prop: string): boolean {
        return ['width', 'height', 'src', 'alt'].includes(prop)
    }
})
