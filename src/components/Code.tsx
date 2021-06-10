import { Box, HStack, Text } from '@chakra-ui/react'

interface CodeProps {
    code?: string
    color?: string
}

const codeExample = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`

export function Code({ code = codeExample, color = 'blue.400' }: CodeProps) {
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
                <Text fontSize="sm">{code}</Text>
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
