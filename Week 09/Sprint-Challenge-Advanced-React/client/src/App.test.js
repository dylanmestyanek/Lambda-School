import React from 'react';
import ReactDOM from "react-dom"
import { fireEvent, render, cleanup} from "@testing-library/react"
import { act } from 'react-dom/test-utils'
import "@testing-library/jest-dom/extend-expect"

import App from './App'; 
import CardContainer from './components/CardContainer';
import Card from "./components/Card"

afterEach(cleanup)

test('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, div);
  })
  ReactDOM.unmountComponentAtNode(div);
});

test('Expect Card component to have an element to display the amount of times the player has been searched', () => {
    const { getByText } = render(<CardContainer googleData={[{name: 'test', country: 'test', searches: 109}]} />);
      expect(getByText(/Women's World Cup Players/i)).toBeTruthy()
})

// test('CardContainer should contain an h1 element with "Women\'s world cup players"', () => {
//   setTimeout(() => {
//     const { getByTestId } = render(<CardContainer />);
//       getByTestId(/women's world cup players/i)
//   }, 10)
// })

