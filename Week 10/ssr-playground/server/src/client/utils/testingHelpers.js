import { cleanup } from "@testing-library/react";

let originalWarning, originalError;

export const beforeEachHelper = () => {
  originalWarning = console.warn;
  originalError = console.error;
  console.error = jest.fn();
  console.warn = jest.fn();
};

export const afterEachHelper = () => {
  cleanup();

  console.warn = originalWarning;
  console.error = originalError;
};
