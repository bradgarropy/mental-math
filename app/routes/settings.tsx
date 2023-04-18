import type {MetaFunction} from "@remix-run/node"
import type {ChangeEventHandler, FormEventHandler} from "react"
import {useState} from "react"

const meta: MetaFunction = () => ({
    title: "🧮 settings",
})

const SettingsRoute = () => {
    const [settings, setSettings] = useState({minimum: 1, maximum: 30})

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        setSettings(settings => {
            const newSettings = {...settings}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            newSettings[event.target.name] = event.target.valueAsNumber
            return newSettings
        })
    }

    const handleSubmit: FormEventHandler = event => {
        event.preventDefault()
        window.localStorage.setItem("settings", JSON.stringify(settings))
    }

    return (
        <form id="settings" onSubmit={handleSubmit}>
            <label htmlFor="minimum">Minimum</label>
            <input
                type="number"
                name="minimum"
                id="minimum"
                min={1}
                max={100}
                value={settings.minimum}
                onChange={handleChange}
            />

            <label htmlFor="maximum">Maximum</label>
            <input
                type="number"
                name="maximum"
                id="maximum"
                min={1}
                max={100}
                value={settings.maximum}
                onChange={handleChange}
            />

            <button type="submit">Save</button>
        </form>
    )
}

export default SettingsRoute
export {meta}
