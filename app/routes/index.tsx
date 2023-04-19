import type {MetaFunction} from "@remix-run/node"
import {useEffect, useState} from "react"

import Card from "~/components/Card/Card"
import useSettings from "~/hooks/useSettings"
import {getRandomNumber} from "~/utils/random"

const meta: MetaFunction = () => ({
    title: "🧮 mental math",
})

const IndexRoute = () => {
    const {settings} = useSettings()
    const [number, setNumber] = useState<number>()

    useEffect(() => {
        if (!settings) {
            return
        }

        setNumber(getRandomNumber(settings.minimum, settings.maximum))
    }, [settings])

    const onNext = () => {
        if (!settings) {
            return
        }

        setNumber(getRandomNumber(settings.minimum, settings.maximum))
    }

    if (!number) {
        return null
    }

    return <Card number={number} onNext={onNext} />
}

export default IndexRoute
export {meta}
