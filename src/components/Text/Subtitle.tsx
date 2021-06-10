import { Text, TextProps } from '@chakra-ui/react'

interface SubtitleProps extends TextProps {
    text: string
    as: any
}

export function Subtitle({ text, as, ...rest }: SubtitleProps) {
    return (
        <Text
            as={as}
            casing="uppercase"
            letterSpacing=".4em"
            fontSize="xs"
            {...rest}
        >
            {text}
        </Text>
    )
}
