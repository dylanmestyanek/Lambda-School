// Test away!
import React from "react"
import { render, queryByText } from "@testing-library/react"
import Display from "./Display"

test('Display renders to screen', () => {
    render(<Display />)
})

test(`Display 'Locked' if the locked prop is true, and 'Unlocked' if false`, () => {
    const { getByText, queryByText } = render(<Display locked={false} />);
    expect(getByText(/Unlocked/i));
    expect(queryByText(/^Locked/i)).toBeFalsy();
})

test(`Class should be 'green-led' if 'Unlocked' or 'Open'`, () => {
    const { getByText, queryByText } = render(<Display locked={false} />);
    expect(getByText(/Unlocked/i).classList.contains('green-led')).toBe(true);
})

test(`Display 'Closed' if the closed prop is true, and 'Open' if false`, () => {
    const { getByText, queryByText } = render(<Display closed={true} />);
    expect(getByText(/Closed/i));
    expect(queryByText(/Open/i)).toBeFalsy();
})

test(`Class should be 'red-led' if 'Locked' or 'Closed'`, () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/Locked/i).classList.contains('red-led')).toBe(true);
})