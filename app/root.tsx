import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import tailwindStyles from "~/styles/tailwind.css"

const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "💿 remix starter",
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
                <main className="grid h-screen w-screen place-items-center">
                    <Outlet />
                </main>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
export {links, meta}
