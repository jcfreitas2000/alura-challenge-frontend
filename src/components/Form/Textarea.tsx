import {
    FormControl,
    FormLabel,
    Textarea as ChakraTextarea,
    TextareaProps as ChakraTextareaProps
} from '@chakra-ui/react'

interface TextareaProps extends ChakraTextareaProps {
    name: string
    label: string
    hiddenLabel: boolean
}

export function Textarea({
    name,
    label,
    hiddenLabel = false,
    ...rest
}: TextareaProps): JSX.Element {
    return (
        <FormControl id={name}>
            <FormLabel fontSize="xs" hidden={hiddenLabel}>
                {label}
            </FormLabel>
            <ChakraTextarea
                variant="filled"
                bgColor="gray.600"
                py="4"
                _hover={{ bgColor: 'gray.600' }}
                {...rest}
            />
        </FormControl>
    )
}
