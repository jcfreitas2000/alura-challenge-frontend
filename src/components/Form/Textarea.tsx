import {
    FormControl,
    FormLabel,
    Textarea as ChakraTextarea,
    TextareaProps as ChakraTextareaProps
} from '@chakra-ui/react'

interface TextareaProps extends ChakraTextareaProps {
    name: string
    label?: string
    placeholder: string
}

export function Textarea({
    name,
    label,
    placeholder,
    ...rest
}: TextareaProps): JSX.Element {
    return (
        <FormControl id={name}>
            {label && <FormLabel fontSize="xs">{label}</FormLabel>}
            <ChakraTextarea
                variant="filled"
                placeholder={placeholder}
                bgColor="gray.600"
                py="4"
                _hover={{ bgColor: 'gray.600' }}
                {...rest}
            />
        </FormControl>
    )
}
