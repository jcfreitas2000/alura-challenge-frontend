import { Box, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Input } from './Form/Input'
import { Profile } from './Profile'
import Link from 'next/link'

export function Header(): JSX.Element {
    return (
        <HStack p={8} justify="space-between" spacing={8}>
            <Box w="100%" maxW="300px">
                <Link href="/">
                    <ChakraLink>
                        <Image src="/images/logo.svg" alt="Alura Dev" />
                        <Text as="h1" hidden={true}>
                            Alura Dev
                        </Text>
                    </ChakraLink>
                </Link>
            </Box>
            <Box as="form" w="100%">
                <Input name="search" placeholder="Busque por algo" />
            </Box>

            <Profile name="Zezin do Cross" />
        </HStack>
    )
}
