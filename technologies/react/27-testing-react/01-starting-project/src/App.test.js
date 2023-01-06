import { render, screen } from "@testing-library/react";
import App from "./App";

// this is a test() function
// it accepts 2 arguments
// the first one is the test name
// the second one is a function, this is where we put what to test
test("renders learn react link", () => {
  // We render the App Component
  // this basically simulates a browser
  render(<App />);
  // We query for an element in the screen
  const linkElement = screen.queryByText(/learn react/i);
  // then we check if the element exists in the document
  expect(linkElement).not.toBeInTheDocument();
});
