import { Header } from './Header'
import { HStack } from '@chakra-ui/react'
import { SidebarMenu } from './SidebarMenu'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <HStack align="flex-start" p={8} spacing={8}>
                <SidebarMenu />
                {children}
            </HStack>
        </>
    )
}
