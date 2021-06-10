import { Box, HStack, Text } from '@chakra-ui/react'
import { Textarea } from './Form/Textarea'

interface CodeProps {
    code: string
    setCode?: (code: string) => void
    color?: string
}

export function Code({
    code,
    setCode,
    color = 'blue.400'
}: CodeProps): JSX.Element {
    return (
        <Box p={8} w="100%" bgColor={color} borderRadius="lg">
            <Box
                bgColor="gray.900"
                borderRadius="lg"
                p={4}
                position="relative"
                whiteSpace="pre-wrap"
            >
                <HStack mb={8}>
                    <ColorCircle color="red.400" />
                    <ColorCircle color="yellow.400" />
                    <ColorCircle color="green.400" />
                </HStack>
                {setCode ? (
                    <Textarea
                        name="code"
                        label="Código"
                        hiddenLabel
                        fontSize="sm"
                        value={code}
                        onChange={event =>
                            setCode && setCode(event.target.value)
                        }
                        bgColor="transparent"
                        rows={10}
                        _hover={{
                            bgColor: 'transparent'
                        }}
                    />
                ) : (
                    <Text fontSize="sm">{code}</Text>
                )}
            </Box>
        </Box>
    )
}

interface ColorCircleProps {
    color: string
}

function ColorCircle({ color }: ColorCircleProps) {
    return <Box w={3} h={3} borderRadius="50%" bgColor={color} />
}
