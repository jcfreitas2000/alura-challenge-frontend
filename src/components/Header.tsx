import {Box, Flex, HStack, Image, Text} from "@chakra-ui/react";
import {Input} from "./Form/Input";
import {Profile} from "./Profile";

export function Header() {
    return (
        <HStack p={8} justify="space-between" spacing={8}>
            <Box w="100%" maxW="300px">
                <Image src="/images/logo.svg" alt="Logo Alura dev"/>
            </Box>
            <Box as="form" w="100%">
                <Input name="search" placeholder="Busque por algo" />
            </Box>

            <Profile name="Zezin do Cross" />
        </HStack>
    );
}
