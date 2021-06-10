import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string
    label: string
    hiddenLabel?: boolean
}

export function Input({
    name,
    label,
    hiddenLabel = false,
    ...rest
}: InputProps): JSX.Element {
    return (
        <FormControl id={name}>
            <FormLabel fontSize="xs" hidden={hiddenLabel}>
                {label}
            </FormLabel>
            <ChakraInput
                name={name}
                variant="filled"
                bgColor="gray.600"
                py="6"
                _hover={{ bgColor: 'gray.600' }}
                {...rest}
            />
        </FormControl>
    )
}
