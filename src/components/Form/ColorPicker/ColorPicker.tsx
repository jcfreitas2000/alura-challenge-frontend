import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent
} from '@chakra-ui/react'
import { colorsOptions, ColorValue } from './index'
import { PopoverTriggerColor } from './PopoverTriggerColor'
import { RadioInputColor } from './RadioInputColor'

interface ColorPickerProps {
    color: ColorValue
    setColor: (color: ColorValue) => void
}

export function ColorPicker({
    color,
    setColor
}: ColorPickerProps): JSX.Element {
    const popoverBg = 'blue.900'
    const selectedColor =
        colorsOptions.find(option => color === option.value) || colorsOptions[0]

    return (
        <Popover>
            <PopoverTriggerColor selectedColor={selectedColor} />
            <PopoverContent bg={popoverBg}>
                <PopoverArrow bg={popoverBg} />
                <PopoverCloseButton />
                <PopoverBody>
                    <RadioInputColor
                        colors={colorsOptions}
                        selectedColor={selectedColor}
                        setSelectedColor={color => setColor(color.value)}
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
