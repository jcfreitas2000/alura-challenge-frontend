import { HStack, Text } from '@chakra-ui/react'
import { ChakraNextImage } from './image/NextChakraImage'

interface ProfileProps {
    name: string
}

export function Profile({ name }: ProfileProps): JSX.Element {
    return (
        <HStack
            w="100%"
            maxW="300px"
            justify="flex-end"
            align="center"
            spacing={2}
        >
            <ChakraNextImage
                src="/images/profile.jpg"
                alt="Foto de perfil"
                width="32px"
                height="32px"
                borderRadius="50%"
            />
            <Text as="span">{name}</Text>
        </HStack>
    )
}
