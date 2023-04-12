import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Grid from "~/components/Grid"

test("renders", () => {
    render(<Grid number={32} />)
    expect(screen.getByText("Grid"))
})
