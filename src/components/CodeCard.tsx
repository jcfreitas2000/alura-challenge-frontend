import { Box, HStack, Text } from '@chakra-ui/react'
import { Code } from './Code'
import { Profile } from './Profile'

import CommentIcon from '../assets/comment.svg'
import LikeIcon from '../assets/like.svg'

interface CodeCardProps {
    code: string
    color?: string
    title: string
    description: string
    commentsCount: number
    likesCount: number
}

export function CodeCard({
    code,
    title,
    description,
    commentsCount,
    likesCount,
    ...rest
}: CodeCardProps): JSX.Element {
    return (
        <Box bgColor="blue.900">
            <Code code={code} {...rest} />

            <Box py={6} px={8}>
                <Text as="h4" fontSize="lg" fontWeight="bold" mb={2}>
                    {title}
                </Text>
                <Text as="p" fontSize="sm">
                    {description}
                </Text>

                <HStack justify="space-between" mt={8}>
                    <HStack spacing={8}>
                        <Counter count={commentsCount} Icon={CommentIcon} />
                        <Counter count={likesCount} Icon={LikeIcon} />
                    </HStack>
                    <Profile name="ZezinDoCross" />
                </HStack>
            </Box>
        </Box>
    )
}

interface CounterProps {
    count: number
    Icon: string
}

function Counter({ count, Icon }: CounterProps) {
    return (
        <HStack>
            <Icon />
            <Text as="strong" fontWeight={400}>
                {count}
            </Text>
        </HStack>
    )
}
