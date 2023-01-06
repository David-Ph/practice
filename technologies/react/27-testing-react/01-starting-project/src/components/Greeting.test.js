import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("Hello World is rendered", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... Nothing

  // Assert
  const helloWorldText = screen.getByText("Hello World!");
  expect(helloWorldText).toBeInTheDocument();
});
