import {Box, Flex, HStack, Image, List, ListItem, Stack, Text} from "@chakra-ui/react";
import {Subtitle} from "./Text/Subtitle";

export function SidebarMenu() {
    return (
        <Flex direction="column" w="100%" maxW="300px">
            <Subtitle text="Menu" as="small"/>
            <List spacing={4} mt={4}>
                <MenuItem iconSrc="/icons/code.svg" text="Editor de código" active={true} />
                <MenuItem iconSrc="/icons/users.svg" text="Comunidade" active={false} />
            </List>
        </Flex>
    )
}

interface MenuItemProps {
    iconSrc: string;
    text: string;
    active: boolean;
}

function MenuItem({iconSrc, text, active}: MenuItemProps) {
    return (
        <ListItem>
            <HStack>
                <Box p={3} borderRadius="1rem" bgColor="blue.500" filter={active ? '' : 'brightness(0.5)'}>
                    <Image w={6} src={iconSrc} alt="Ícone de código"/>
                </Box>
                <Text>{text}</Text>
            </HStack>
        </ListItem>
    );
}
