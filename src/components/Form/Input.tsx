import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string
    label?: string
    placeholder: string
}

export function Input({ name, label, placeholder, ...rest }: InputProps) {
    return (
        <FormControl id={name}>
            {label && <FormLabel fontSize="xs">{label}</FormLabel>}
            <ChakraInput
                name={name}
                variant="filled"
                placeholder={placeholder}
                bgColor="gray.600"
                py="6"
                _hover={{ bgColor: 'gray.600' }}
                {...rest}
            />
        </FormControl>
    )
}
