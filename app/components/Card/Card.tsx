import type {FC} from "react"
import {useEffect} from "react"
import {useState} from "react"
import {useSwipeable} from "react-swipeable"

import NumberGrid from "~/components/NumberGrid"

const getRandomNumber = (min = 1, max = 30) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Card: FC = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [number, setNumber] = useState<number>()

    useEffect(() => {
        setNumber(getRandomNumber())
    }, [])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (["Space"].includes(event.code)) {
                flipCard()
            }

            if (
                ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
                    event.code,
                )
            ) {
                newCard()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [showAnswer])

    const flipCard = () => {
        setShowAnswer(showAnswer => !showAnswer)
    }

    const newCard = () => {
        setShowAnswer(false)
        setNumber(getRandomNumber())
    }

    const swipeHandlers = useSwipeable({
        onSwiped: () => newCard(),
        onTap: () => flipCard(),
        trackTouch: true,
        trackMouse: true,
    })

    if (number === undefined) {
        return null
    }

    return (
        <div
            {...swipeHandlers}
            className="grid aspect-flashcard h-3/4 place-items-center border-4 border-black"
        >
            {showAnswer ? (
                <span className="font-text text-xxl">{number}</span>
            ) : (
                <NumberGrid number={number} />
            )}
        </div>
    )
}

export default Card
