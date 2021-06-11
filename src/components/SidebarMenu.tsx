import {
    Box,
    Flex,
    HStack,
    Link as ChakraLink,
    List,
    ListItem,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { Subtitle } from './Text/Subtitle'
import Link from 'next/link'
import { useRouter } from 'next/router'

import CodeIcon from '../assets/code.svg'
import UsersIcon from '../assets/users.svg'

export function SidebarMenu(): JSX.Element {
    const isMobile = useBreakpointValue({ base: true, md: false })

    if (isMobile) {
        return <></>
    }

    return (
        <Flex as="nav" direction="column" w="100%" maxW="300px">
            <Subtitle text="Menu" as="h4" />
            <List spacing={4} mt={4}>
                <MenuItem Icon={CodeIcon} text="Editor de código" href="/" />
                <MenuItem
                    Icon={UsersIcon}
                    text="Comunidade"
                    href="/community"
                />
            </List>
        </Flex>
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
