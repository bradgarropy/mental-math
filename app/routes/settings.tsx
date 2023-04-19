import type {MetaFunction} from "@remix-run/node"
import {useNavigate} from "@remix-run/react"
import type {ChangeEventHandler, FormEventHandler} from "react"

import useSettings from "~/hooks/useSettings"

const meta: MetaFunction = () => ({
    title: "settings",
})

const SettingsRoute = () => {
    const navigate = useNavigate()
    const {settings, setSettings} = useSettings()

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        setSettings(settings => {
            const newSettings = Object.assign({}, settings)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            newSettings[event.target.name] = event.target.valueAsNumber
            return newSettings
        })
    }

    const handleSubmit: FormEventHandler = event => {
        event.preventDefault()
        navigate("/")
    }

    return (
        <form
            id="settings"
            className="grid grid-cols-2 gap-6 text-xl"
            onSubmit={handleSubmit}
        >
            <label htmlFor="minimum" className="font-bold">
                Minimum
            </label>

            <input
                type="number"
                name="minimum"
                id="minimum"
                min={1}
                max={100}
                value={settings?.minimum}
                onChange={handleChange}
            />

            <label htmlFor="maximum" className="font-bold">
                Maximum
            </label>

            <input
                type="number"
                name="maximum"
                id="maximum"
                min={1}
                max={100}
                value={settings?.maximum}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="col-span-2 mt-6 rounded-sm bg-blue-800 px-4 py-2 font-bold text-white"
            >
                Save
            </button>
        </form>
    )
}

export default SettingsRoute
export {meta}
