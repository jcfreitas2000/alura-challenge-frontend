import { Input } from '../Form/Input'
import { Box, InputProps } from '@chakra-ui/react'

export function FormSearch(props: InputProps): JSX.Element {
    return (
        <Box as="form" w="100%">
            <Input
                name="search"
                label="Procurar"
                hiddenLabel
                placeholder="Busque por algo"
                {...props}
            />
        </Box>
    )
}
