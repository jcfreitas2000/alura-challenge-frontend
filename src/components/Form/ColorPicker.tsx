import {Box, HStack, RadioProps, Text, useRadio, useRadioGroup} from "@chakra-ui/react";

type ColorOption = {
    value: string;
    color: string;
}

export function ColorPicker() {
    const options: ColorOption[] = [
        {value: 'gray', color: "gray.400"},
        {value: 'red', color: "red.400"},
        {value: 'orange', color: "orange.400"},
        {value: 'yellow', color: "yellow.400"},
        {value: 'green', color: "green.400"},
        {value: 'teal', color: "teal.400"},
        {value: 'blue', color: "blue.400"},
        {value: 'cyan', color: "cyan.400"},
        {value: 'purple', color: "purple.400"},
        {value: 'pink', color: "pink.400"},
    ]

    return (
        <p>colors</p>
    )
}
