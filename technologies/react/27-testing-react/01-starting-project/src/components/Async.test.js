import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          title: "first post",
        },
      ],
    });
    render(<Async />);

    const listItems = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 5000 }
    );
    expect(listItems).not.toHaveLength(0);
  });
});
