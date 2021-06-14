import {
    Box,
    Flex,
    HStack,
    Link as ChakraLink,
    List,
    ListItem,
    Text
} from '@chakra-ui/react'
import { Subtitle } from './Text/Subtitle'
import Link from 'next/link'
import { useRouter } from 'next/router'

import CodeIcon from '../assets/code.svg'
import UsersIcon from '../assets/users.svg'
import { Container } from './Container'

interface SidebarMenuProps {
    isOpen: boolean
}

export function SidebarMenu({ isOpen }: SidebarMenuProps): JSX.Element {
    return (
        <Container
            w="100%"
            maxW="300px"
            pos={{ base: 'absolute', md: 'initial' }}
            bg="blue.800"
            zIndex={1000}
            height="100%"
            left="-300"
            transform={isOpen ? 'translateX(300px)' : ''}
            transition="transform .25s, box-shadow .25s"
            boxShadow={isOpen ? '0 1000px 0 1000px rgba(0,0,0,0.5)' : ''}
        >
            <Flex as="nav" direction="column">
                <Subtitle text="Menu" as="h4" />
                <List spacing={4} mt={4}>
                    <MenuItem
                        Icon={CodeIcon}
                        text="Editor de código"
                        href="/"
                    />
                    <MenuItem
                        Icon={UsersIcon}
                        text="Comunidade"
                        href="/community"
                    />
                </List>
            </Flex>
        </Container>
    )
}

interface MenuItemProps {
    text: string
    href: string
    Icon: string
}

function MenuItem({ Icon, text, href }: MenuItemProps): JSX.Element {
    const router = useRouter()

    return (
        <ListItem>
            <Link href={href}>
                <ChakraLink>
                    <HStack>
                        <Box
                            p={3}
                            borderRadius="1rem"
                            bgColor="blue.500"
                            filter={
                                router.pathname === href
                                    ? ''
                                    : 'brightness(0.5)'
                            }
                        >
                            <Icon />
                        </Box>
                        <Text>{text}</Text>
                    </HStack>
                </ChakraLink>
            </Link>
        </ListItem>
    )
}
