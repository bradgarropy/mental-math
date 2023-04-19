import {useContext} from "react"

import type {SettingsContextType} from "~/context/Settings"
import {SettingsContext} from "~/context/Settings"

const useSettings = (): SettingsContextType => {
    const settingsCtx = useContext(SettingsContext)
    return settingsCtx
}

export default useSettings
