import type {MetaFunction} from "@remix-run/node"

import Card from "~/components/Card/Card"

const meta: MetaFunction = () => ({
    title: "🧮 mental math",
})

const IndexRoute = () => {
    return <Card />
}

export default IndexRoute
export {meta}
