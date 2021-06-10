import {
    Box,
    Button,
    Center,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text,
    Tooltip,
    useRadio,
    useRadioGroup,
    UseRadioProps,
    Wrap
} from '@chakra-ui/react'

type ColorLabel =
    | 'Cinza'
    | 'Vermelho'
    | 'Laranja'
    | 'Amarelo'
    | 'Verde'
    | 'Verde-azulado'
    | 'Azul'
    | 'Ciano'
    | 'Roxo'
    | 'Rosa'

export type ColorValue =
    | 'gray.400'
    | 'red.400'
    | 'orange.400'
    | 'yellow.400'
    | 'green.400'
    | 'teal.400'
    | 'blue.400'
    | 'cyan.400'
    | 'purple.400'
    | 'pink.400'

type Color = {
    label: ColorLabel
    value: ColorValue
}

const options: Color[] = [
    { label: 'Cinza', value: 'gray.400' },
    { label: 'Vermelho', value: 'red.400' },
    { label: 'Laranja', value: 'orange.400' },
    { label: 'Amarelo', value: 'yellow.400' },
    { label: 'Verde', value: 'green.400' },
    { label: 'Verde-azulado', value: 'teal.400' },
    { label: 'Azul', value: 'blue.400' },
    { label: 'Ciano', value: 'cyan.400' },
    { label: 'Roxo', value: 'purple.400' },
    { label: 'Rosa', value: 'pink.400' }
]

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
        options.find(option => color === option.value) || options[0]

    return (
        <Popover>
            <PopoverTriggerColor selectedColor={selectedColor} />
            <PopoverContent bg={popoverBg}>
                <PopoverArrow bg={popoverBg} />
                <PopoverCloseButton />
                <PopoverBody>
                    <RadioGroupColor
                        colors={options}
                        selectedColor={selectedColor}
                        setSelectedColor={color => setColor(color.value)}
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

interface PopoverTriggerColorProps {
    selectedColor: Color
}

function PopoverTriggerColor({ selectedColor }: PopoverTriggerColorProps) {
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

interface RadioGroupColorProps {
    colors: Color[]
    selectedColor: Color
    setSelectedColor: (color: Color) => void
}

function RadioGroupColor({
    colors,
    selectedColor,
    setSelectedColor
}: RadioGroupColorProps) {
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
                    <RadioItemColor
                        key={color.value}
                        colorItem={color}
                        {...radio}
                    />
                )
            })}
        </Wrap>
    )
}

interface RadioItemColorProps extends UseRadioProps {
    colorItem: Color
}

function RadioItemColor({ colorItem, ...props }: RadioItemColorProps) {
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
