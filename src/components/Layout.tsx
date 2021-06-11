import { Header } from './Header'
import { Box, HStack } from '@chakra-ui/react'
import { SidebarMenu } from './SidebarMenu'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <HStack pos="relative" align="flex-start" p={{ base: 4, md: 8 }}>
                <SidebarMenu />
                <Box w="100%">{children}</Box>
            </HStack>
        </>
    )
}
