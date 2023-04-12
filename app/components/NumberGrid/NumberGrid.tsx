import type {FC} from "react"

import Grid from "~/components/Grid"

type NumberGridProps = {
    number: number
}

const NumberGrid: FC<NumberGridProps> = ({number}) => {
    const numGrids = Math.max(1, Math.ceil(number / 10))
    const grids = Array.from(Array(numGrids).keys())

    return (
        <div className="grid gap-y-12">
            {grids.map(grid => {
                return <Grid key={grid} number={number - grid * 10} />
            })}
        </div>
    )
}

export default NumberGrid
