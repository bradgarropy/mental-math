import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Card from "~/components/Card"

const mockOnNext = vi.fn()

test("shows card", () => {
    render(<Card number={12} onNext={mockOnNext} />)

    expect(screen.queryAllByLabelText("circle")).toHaveLength(12)
    expect(screen.queryByText("12")).not.toBeInTheDocument()
})

test("flips card", async () => {
    const user = userEvent.setup()

    render(<Card number={3} onNext={mockOnNext} />)

    await user.keyboard(" ")
    expect(screen.getByText("3")).toBeInTheDocument()

    await user.keyboard(" ")
    expect(screen.queryByText("3")).not.toBeInTheDocument()
    expect(screen.queryAllByLabelText("circle")).toHaveLength(3)
})

test("shows next card", async () => {
    const user = userEvent.setup()

    render(<Card number={3} onNext={mockOnNext} />)

    await user.keyboard("{ArrowUp}")
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{ArrowLeft}")
    await user.keyboard("{ArrowRight}")

    expect(mockOnNext).toHaveBeenCalledTimes(4)
})
