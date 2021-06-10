import { Subtitle } from '../Text/Subtitle'

interface LegendProps {
    text: string
}

export function Legend({ text }: LegendProps) {
    return <Subtitle text={text} as="legend" />
}
