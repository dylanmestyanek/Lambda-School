import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
// import { fireEvent } from '@testing-library/dom';

import App from './App';
import Dashboard from './components/Dashboard';
import { getByTestId } from '@testing-library/dom';

afterEach(cleanup)

test('renders without crashing', () => {
  render(<App />);
});

test('Strike function adds 1 point to strike points', () => {

  const { getByTestId } = render(<Dashboard />);

  fireEvent.click(getByTestId("strikeButton"))
  expect(getByTestId("strikeValue")).toHaveTextContent(1);
})



  test("Ball function should reset displayed ball value to 0 after 4 clicks", () => {
    const { getByTestId } = render(<Dashboard />);
    
    fireEvent.click(getByTestId('ballButton'));
    fireEvent.click(getByTestId('ballButton'));
    fireEvent.click(getByTestId('ballButton'));
    fireEvent.click(getByTestId('ballButton'));
  
      expect(getByTestId('ballValue')).toHaveTextContent(0);
  })

  test("Strike function should reset displayed strike value to 0 after 3 clicks", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('strikeButton'));
    fireEvent.click(getByTestId('strikeButton'));
    fireEvent.click(getByTestId('strikeButton'));
    
      expect(getByTestId('strikeValue')).toHaveTextContent(0);
  })

  test("Foul button should not increment the strike value, if strikes are at 2", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('strikeButton'));
    fireEvent.click(getByTestId('strikeButton'));
    fireEvent.click(getByTestId('foulButton'));
    expect(getByTestId('strikeValue')).toHaveTextContent(2);
  })

  test("Hit button should reset balls and strikes values to 0", () => {
    const { getByTestId } = render(<Dashboard />);

    fireEvent.click(getByTestId('hitButton'));
    expect(getByTestId('strikeValue')).toHaveTextContent(0)
    expect(getByTestId('ballValue')).toHaveTextContent(0)
  })
