import {render, screen} from "@testing-library/react"

import Grid from "~/components/Grid"

test("shows full grid", () => {
    render(<Grid number={10} />)
    expect(screen.getAllByLabelText("circle")).toHaveLength(10)
})

test("shows overflow grid", () => {
    render(<Grid number={12} />)
    expect(screen.getAllByLabelText("circle")).toHaveLength(10)
})

test("shows empty grid", () => {
    render(<Grid number={0} />)
    expect(screen.queryAllByLabelText("circle")).toHaveLength(0)
})

test("shows partial grid", () => {
    render(<Grid number={4} />)
    expect(screen.getAllByLabelText("circle")).toHaveLength(4)
})
