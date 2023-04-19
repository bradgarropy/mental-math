import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import NumberGrid from "~/components/NumberGrid"

test("shows number grid", () => {
    render(<NumberGrid number={32} />)
    expect(screen.getAllByLabelText("circle")).toHaveLength(32)
})
