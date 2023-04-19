import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import {SettingsProvider} from "~/context/Settings"
import tailwindStyles from "~/styles/tailwind.css"

const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "🧮 mental math",
    viewport: "width=device-width,initial-scale=1",
})

const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: tailwindStyles,
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <SettingsProvider>
                    <main className="grid h-screen w-screen grid-rows-[auto,1fr] place-items-center content-start p-4">
                        <Link to="/settings" className="justify-self-end">
                            Settings
                        </Link>
                        <Outlet />
                    </main>
                </SettingsProvider>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
export {links, meta}
