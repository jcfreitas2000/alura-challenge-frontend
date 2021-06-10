import { HStack, Image, Text } from '@chakra-ui/react'

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
            <Image
                src="/images/profile.jpg"
                alt="Foto de perfil"
                w="32px"
                borderRadius="50%"
            />
            <Text as="span">{name}</Text>
        </HStack>
    )
}
