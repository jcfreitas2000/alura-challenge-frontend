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

export function Textarea({ name, label, placeholder, ...rest }: TextareaProps) {
    return (
        <FormControl id="description">
            {label && <FormLabel fontSize="xs">Descrição</FormLabel>}
            <ChakraTextarea
                variant="filled"
                placeholder="Descrição do seu projeto"
                bgColor="gray.600"
                py="4"
                _hover={{ bgColor: 'gray.600' }}
                {...rest}
            />
        </FormControl>
    )
}
