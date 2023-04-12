import type {MetaFunction} from "@remix-run/node"

import Card from "~/components/Card/Card"

const meta: MetaFunction = () => ({
    title: "💿 remix starter | home",
})

const IndexRoute = () => {
    return <Card />
}

export default IndexRoute
export {meta}
