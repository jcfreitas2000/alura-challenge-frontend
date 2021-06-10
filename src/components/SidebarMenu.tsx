import {
    Box,
    Flex,
    HStack,
    Image,
    Link as ChakraLink,
    List,
    ListItem,
    Text
} from '@chakra-ui/react'
import { Subtitle } from './Text/Subtitle'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function SidebarMenu() {
    return (
        <Flex direction="column" w="100%" maxW="300px">
            <Subtitle text="Menu" as="small" />
            <List spacing={4} mt={4}>
                <MenuItem
                    iconSrc="/icons/code.svg"
                    text="Editor de código"
                    href="/"
                />
                <MenuItem
                    iconSrc="/icons/users.svg"
                    text="Comunidade"
                    href="/community"
                />
            </List>
        </Flex>
    )
}

interface MenuItemProps {
    iconSrc: string
    text: string
    href: string
}

function MenuItem({ iconSrc, text, href }: MenuItemProps) {
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
                            <Image w={6} src={iconSrc} alt="Ícone de código" />
                        </Box>
                        <Text>{text}</Text>
                    </HStack>
                </ChakraLink>
            </Link>
        </ListItem>
    )
}
