import {Flex, Image, Stack} from "@chakra-ui/react";
import {Input} from "./Form/Input";
import {Subtitle} from "./Text/Subtitle";

export function SidebarMenu() {
    return (
        <Flex direction="column" w="100%" maxW="300px">
            <Stack>
                <Subtitle text="Menu" as="small"/>
            </Stack>
        </Flex>
    )
}
