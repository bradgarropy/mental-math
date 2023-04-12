import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import NumberGrid from "~/components/NumberGrid"

test("renders", () => {
    render(<NumberGrid number={32} />)
    expect(screen.getByText("NumberGrid"))
})
