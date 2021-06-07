import {Text, TextProps} from "@chakra-ui/react";

interface LegendProps extends TextProps {
    text: string;
}

export function Legend({text, ...rest}: LegendProps) {
    return (
        <Text as="legend" casing="uppercase" letterSpacing=".4em" fontSize="xs" {...rest}>{text}</Text>
    );
}
