import type {Dispatch, FC, ReactNode, SetStateAction} from "react"
import {useEffect} from "react"
import {createContext, useState} from "react"

type Settings =
    | {
          minimum: number
          maximum: number
      }
    | undefined

type SettingsContextType = {
    settings: Settings
    setSettings: Dispatch<SetStateAction<Settings>>
}

const SettingsContext = createContext({} as SettingsContextType)

type SettingsProviderProps = {
    children: ReactNode
}

const defaultSettings: Settings = {
    minimum: 1,
    maximum: 30,
}

const SettingsProvider: FC<SettingsProviderProps> = ({children}) => {
    const [settings, setSettings] = useState<Settings>()

    useEffect(() => {
        const rawSettings = window.localStorage.getItem("settings")

        if (rawSettings === null) {
            setSettings(defaultSettings)
            return
        }

        const localSettings: Settings = JSON.parse(rawSettings)

        setSettings({
            ...defaultSettings,
            ...localSettings,
        })
    }, [])

    useEffect(() => {
        if (!settings) {
            return
        }

        window.localStorage.setItem("settings", JSON.stringify(settings))
    }, [settings])

    const context: SettingsContextType = {
        settings,
        setSettings,
    }

    return (
        <SettingsContext.Provider value={context}>
            {children}
        </SettingsContext.Provider>
    )
}

export {SettingsContext, SettingsProvider}
export type {SettingsContextType}
