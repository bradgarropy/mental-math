import type {FC} from "react"
import {useCallback} from "react"
import {useEffect, useState} from "react"
import {useSwipeable} from "react-swipeable"

import NumberGrid from "~/components/NumberGrid"

type CardProps = {
    number: number
    onNext: () => void
}

const Card: FC<CardProps> = ({number, onNext}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const nextCard = useCallback(() => {
        showFront()
        onNext()
    }, [onNext])

    const showFront = () => {
        setShowAnswer(false)
    }

    const flipCard = () => {
        setShowAnswer(showAnswer => !showAnswer)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case "Space":
                    flipCard()
                    break

                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                    nextCard()
                    break

                default:
                    break
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [showAnswer, nextCard])

    const swipeHandlers = useSwipeable({
        onSwiped: () => nextCard(),
        onTap: () => flipCard(),
        trackTouch: true,
        trackMouse: false,
        preventScrollOnSwipe: true,
    })

    return (
        <div
            {...swipeHandlers}
            className="grid aspect-flashcard max-h-screen w-full max-w-screen-sm place-items-center content-center rounded-sm border-4 border-black @container"
        >
            {showAnswer ? (
                <span className="font-text text-[50cqw]">{number}</span>
            ) : (
                <NumberGrid number={number} />
            )}
        </div>
    )
}

export default Card
