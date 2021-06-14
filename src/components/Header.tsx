import {
    Box,
    Button,
    HStack,
    Link as ChakraLink,
    useBreakpointValue,
    VisuallyHidden
} from '@chakra-ui/react'
import { Profile } from './Profile'
import Link from 'next/link'

import LogoIcon from '../assets/logo.svg'
import { FormSearch } from './Search'
import { Container } from './Container'

interface HeaderProps {
    toggleMenuOpen: () => void
}

export function Header({ toggleMenuOpen }: HeaderProps): JSX.Element {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Container>
            <HStack justify="space-between" spacing={{ base: 4, md: 8 }}>
                <Box w={{ md: '100%' }} maxW={{ md: '300px' }}>
                    <Link href="/">
                        <ChakraLink>
                            <LogoIcon />
                            <VisuallyHidden as="h1">Alura Dev</VisuallyHidden>
                        </ChakraLink>
                    </Link>
                </Box>

                {!isMobile && <FormSearch />}

                <HStack w="100%" maxW="300px" justify="flex-end">
                    {isMobile && (
                        <Button
                            hidden={!isMobile}
                            variant="outline"
                            onClick={toggleMenuOpen}
                        >
                            Menu
                        </Button>
                    )}
                    <Profile name="Zezin do Cross" />
                </HStack>
            </HStack>
        </Container>
    )
}
