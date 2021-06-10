import {
    FormControl,
    FormLabel,
    Select as ChakraSelect,
    SelectProps as ChakraSelectProps
} from '@chakra-ui/react'

interface SelectProps extends ChakraSelectProps {
    name: string
    label: string
    hiddenLabel?: boolean
    options: {
        label: string
        value: string
    }[]
}

export function Select({
    name,
    label,
    hiddenLabel = false,
    options,
    ...rest
}: SelectProps): JSX.Element {
    return (
        <FormControl id={name}>
            <FormLabel fontSize="xs" hidden={hiddenLabel}>
                {label}
            </FormLabel>
            <ChakraSelect
                variant="filled"
                bgColor="gray.600"
                _hover={{ bgColor: 'gray.600' }}
                color="gray.400"
                {...rest}
            >
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                        style={{ color: '#000' }}
                    >
                        {option.label}
                    </option>
                ))}
            </ChakraSelect>
        </FormControl>
    )
}
