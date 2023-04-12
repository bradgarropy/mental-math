import type {FC, MouseEventHandler} from "react"
import {useState} from "react"

import NumberGrid from "~/components/NumberGrid"

const getRandomNumber = (min = 1, max = 30) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Card: FC = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [number, setNumber] = useState(getRandomNumber())

    const onClick: MouseEventHandler<HTMLButtonElement> = () => {
        if (showAnswer) {
            setNumber(getRandomNumber())
        }

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
