import { HStack, Text, useBreakpointValue } from '@chakra-ui/react'
import { ChakraNextImage } from './image/NextChakraImage'

interface ProfileProps {
    name: string
}

export function Profile({ name }: ProfileProps): JSX.Element {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <HStack spacing={2}>
            <ChakraNextImage
                src="/images/profile.jpg"
                alt="Foto de perfil"
                width="32px"
                height="32px"
                borderRadius="50%"
            />
            <Text as="span" hidden={isMobile}>
                {name}
            </Text>
        </HStack>
    )
}
