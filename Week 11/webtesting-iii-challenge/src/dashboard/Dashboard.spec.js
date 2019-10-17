import React from "react"
import { render } from "@testing-library/react"

import Dashboard from "./Dashboard"
import Controls from "../controls/Controls"

// Test away

test('Dashboard renders to screen', () => {
    render(<Dashboard />);
})

test('Gate should default to unlocked and open position', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/open/i))
    expect(getByText(/unlocked/i))
})

test('Show the controls and display', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})