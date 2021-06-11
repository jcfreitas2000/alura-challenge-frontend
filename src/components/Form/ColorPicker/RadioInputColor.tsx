import { useRadioGroup, Wrap } from '@chakra-ui/react'
import { Color } from './index'
import { RadioInputColorItem } from './RadioInputColorItem'

interface RadioGroupColorProps {
    colors: Color[]
    selectedColor: Color
    setSelectedColor: (color: Color) => void
}

export function RadioInputColor({
    colors,
    selectedColor,
    setSelectedColor
}: RadioGroupColorProps): JSX.Element {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'color',
        defaultValue: selectedColor.value,
        onChange: colorValue => {
            const color = colors.find(color => color.value === colorValue)
            if (color) setSelectedColor(color)
        }
    })

    const group = getRootProps()

    return (
        <Wrap spacing={1} {...group}>
            {colors.map((color: Color) => {
                const radio = getRadioProps(color)
                return (
                    <RadioInputColorItem
                        key={color.value}
                        colorItem={color}
                        {...radio}
                    />
                )
            })}
        </Wrap>
    )
}
