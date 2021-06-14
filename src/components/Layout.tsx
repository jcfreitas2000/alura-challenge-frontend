import { Header } from './Header'
import { Box, HStack } from '@chakra-ui/react'
import { SidebarMenu } from './SidebarMenu'
import { ReactNode, useState } from 'react'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <Header toggleMenuOpen={() => setIsMenuOpen(!isMenuOpen)} />
            <HStack
                pos="relative"
                align="flex-start"
                spacing={{ base: 0, md: 8 }}
            >
                <SidebarMenu isOpen={isMenuOpen} />
                <Box w="100%">{children}</Box>
            </HStack>
        </>
    )
}
