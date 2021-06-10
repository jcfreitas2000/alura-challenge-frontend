import { Subtitle } from '../Text/Subtitle'

interface LegendProps {
    text: string
}

export function Legend({ text }: LegendProps): JSX.Element {
    return <Subtitle text={text} as="legend" />
}
