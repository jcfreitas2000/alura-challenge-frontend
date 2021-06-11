import { Button, PopoverTrigger, Text } from '@chakra-ui/react'
import { Color } from './index'

interface PopoverTriggerColorProps {
    selectedColor: Color
}

export function PopoverTriggerColor({
    selectedColor
}: PopoverTriggerColorProps): JSX.Element {
    return (
        <PopoverTrigger>
            <Button
                width="100%"
                p={1}
                py={6}
                borderRadius="md"
                borderWidth={1}
                bg="transparent"
                _hover={{
                    bg: 'inherit',
                    filter: 'brightness(0.75)'
                }}
                _active={{
                    bg: 'inherit',
                    filter: 'brightness(0.5)'
                }}
                _before={{
                    content: '""',
                    display: 'block',
                    bg: selectedColor.value,
                    width: '100%',
                    height: 10,
                    borderRadius: 'md'
                }}
            >
                <Text hidden>{selectedColor.label}</Text>
            </Button>
        </PopoverTrigger>
    )
}
