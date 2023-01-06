import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("Hello World is rendered", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... Nothing

    // Assert
    const helloWorldText = screen.getByText("Hello World!");
    expect(helloWorldText).toBeInTheDocument();
  });

  test("Initial text is rendered correctly", () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const initialText = screen.getByText("its good to see you!");
    expect(initialText).toBeInTheDocument();

    const changedText = screen.queryByText("Text is changed!");
    expect(changedText).not.toBeInTheDocument();
  });

  test("Text is changed after button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const initialText = screen.queryByText("its good to see you!");
    expect(initialText).not.toBeInTheDocument();

    const changedText = screen.getByText("Text is changed!");
    expect(changedText).toBeInTheDocument();
  });
});
