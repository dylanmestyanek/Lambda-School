// Test away!
import React from "react"
import { render } from "@testing-library/react"

import Controls from "./Controls"

 test('Controls renders to the screen', () => {
     render(<Controls />);
 })

 test('If locked state is false, expect lock/unlock button to say Lock Gate', () => {
     const { getByText } = render(<Controls locked={false} />)
     expect(getByText(/Lock Gate/i))
})
    
test('If locked state is true, expect lock/unlock button to say Unlock Gate', () => {
    const { getByText } = render(<Controls locked={true} />)
    expect(getByText(/Unlock Gate/i))
})

test('If closed state is false, expect close/open button to say Close Gate', () => {
    const { getByText } = render(<Controls closed={false} />)
    expect(getByText(/Close Gate/i))
})

test('If closed state is true, expect close/open button to say Open Gate', () => {
    const { getByText } = render(<Controls closed={true} />)
    expect(getByText(/Open Gate/i))
})

test('Closed toggle button is disabled if gate is locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    expect(getByText(/Open Gate/i).disabled).toBe(true)
})

test('Locked toggle button is disabled if the gate is open', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />)
    expect(getByText(/Lock Gate/i).disabled).toBe(true)
})