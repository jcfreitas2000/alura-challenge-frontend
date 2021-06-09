import {Box, HStack, Image, Text} from "@chakra-ui/react";
import {Code} from "./Code";
import {Profile} from "./Profile";

interface CodeCardProps {
    code?: string;
    color?: string;
    title: string;
    description: string;
    commentsCount: number;
    likesCount: number;
}

export function CodeCard({title, description, commentsCount, likesCount, ...rest}: CodeCardProps) {
    return (
        <Box bgColor="blue.900" borderRadius="lg">
            <Code {...rest} />

            <Box py={6} px={8}>
                <Text as="h4" fontSize="lg" fontWeight="bold" mb={2}>{title}</Text>
                <Text as="p" fontSize="sm">{description}</Text>

                <HStack justify="space-between" mt={8}>
                    <HStack spacing={8}>
                        <Counter iconsSrc="/icons/comment.svg" iconsAlt="Quantidade de comentários" count={6}/>
                        <Counter iconsSrc="/icons/like.svg" iconsAlt="Quantidade de likes" count={10}/>
                    </HStack>
                    <Profile name="ZezinDoCross"/>
                </HStack>
            </Box>
        </Box>
    )
}

interface CounterProps {
    iconsSrc: string;
    iconsAlt: string;
    count: number;
}

function Counter({iconsSrc, iconsAlt, count}: CounterProps) {
    return (
        <HStack>
            <Image src={iconsSrc} alt={iconsAlt}/>
            <Text as="strong" fontWeight={400}>{count}</Text>
        </HStack>
    )
}
