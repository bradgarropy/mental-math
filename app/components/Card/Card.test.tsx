import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Card from "~/components/Card"

test("renders", () => {
    render(<Card number={32} />)
    expect(screen.getByText("Card"))
})
