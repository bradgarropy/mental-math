import type {FC, MouseEventHandler} from "react"
import {useState} from "react"

import NumberGrid from "~/components/NumberGrid"

type CardProps = {
    number: number
}

const Card: FC<CardProps> = ({number}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const onClick: MouseEventHandler<HTMLButtonElement> = () => {
        setShowAnswer(!showAnswer)
    }

    return (
        <button
            className="grid aspect-flashcard h-3/4 cursor-pointer place-items-center border-4 border-black"
            onClick={onClick}
        >
            {showAnswer ? (
                <span className="font-text text-xxl">{number}</span>
            ) : (
                <NumberGrid number={number} />
            )}
        </button>
    )
}

export default Card
