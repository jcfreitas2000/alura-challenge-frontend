import {Flex, HStack,} from "@chakra-ui/react";
import {ProjectForm} from "../components/Project/Form";
import {SidebarMenu} from "../components/SidebarMenu";
import {Header} from "../components/Header";


export default function Home() {
    return (
        <>
            <Header />
            <Flex justify="space-between" p={8} spacing={8}>
                <SidebarMenu/>
                <p>Body</p>
                <ProjectForm/>
            </Flex>
        </>
    )
}
