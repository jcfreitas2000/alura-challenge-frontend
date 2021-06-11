import { Box, Center, Tooltip, useRadio, UseRadioProps } from '@chakra-ui/react'
import { Color } from './index'

interface RadioInputColorItemProps extends UseRadioProps {
    colorItem: Color
}

export function RadioInputColorItem({
    colorItem,
    ...props
}: RadioInputColorItemProps): JSX.Element {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Tooltip
            hasArrow
            label={colorItem.label}
            bg={colorItem.value}
            color="black"
        >
            <Box as="label">
                <input {...input} />
                <Center
                    {...checkbox}
                    cursor="pointer"
                    bg={colorItem.value}
                    w={7}
                    h={7}
                    borderRadius="50%"
                    m={1}
                    _checked={{
                        _after: {
                            content: '"✓"',
                            display: 'block',
                            color: 'black'
                        }
                    }}
                />
            </Box>
        </Tooltip>
    )
}
