import { Box, HStack, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Input } from './Form/Input'
import { Profile } from './Profile'
import Link from 'next/link'

import LogoIcon from '../assets/logo.svg'

export function Header(): JSX.Element {
    return (
        <HStack p={8} justify="space-between" spacing={8}>
            <Box w="100%" maxW="300px">
                <Link href="/">
                    <ChakraLink>
                        <LogoIcon />
                        <Text as="h1" hidden={true}>
                            Alura Dev
                        </Text>
                    </ChakraLink>
                </Link>
            </Box>
            <Box as="form" w="100%">
                <Input
                    name="search"
                    label="Procurar"
                    hiddenLabel
                    placeholder="Busque por algo"
                />
            </Box>

            <Profile name="Zezin do Cross" />
        </HStack>
    )
}
