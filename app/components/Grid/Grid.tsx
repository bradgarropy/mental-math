import type {FC} from "react"

type GridProps = {
    number: number
}

const Grid: FC<GridProps> = ({number}) => {
    const slots = Array.from(Array(10).keys())
    const circles = number < 10 ? number : 10

    return (
        <div className="grid grid-cols-[repeat(5,100px)] grid-rows-[repeat(2,100px)] border-2 border-black">
            {slots.map(slot => {
                return (
                    <div
                        key={slot}
                        className="grid h-full w-full place-items-center border-2 border-black"
                    >
                        {slot < circles ? (
                            <svg
                                viewBox="0 0 100 100"
                                className="h-5/6 w-5/6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50" />
                            </svg>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}

export default Grid
