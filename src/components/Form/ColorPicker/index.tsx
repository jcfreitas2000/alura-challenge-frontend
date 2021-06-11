export type ColorLabel =
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

export type Color = {
    label: ColorLabel
    value: ColorValue
}

export const colorsOptions: Color[] = [
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

export { ColorPicker } from './ColorPicker'
