import {Flex,} from "@chakra-ui/react";
import {ProjectForm} from "../components/Project/Form";


export default function Home() {
    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex as="form" w="100%" maxW="360px">
                <ProjectForm/>
            </Flex>
        </Flex>
    )
}
