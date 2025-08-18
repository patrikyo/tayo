import { render, screen } from "@testing-library/react";
import ThankYouMessage from "./ThankYouMessage";
import "@testing-library/jest-dom";

describe("ThankYouMessage", () => {
  it("Should render the main header", () => {
    render(<ThankYouMessage />);
    const header = screen.getByText("Tack för ditt meddelande!");
    expect(header).toBeInTheDocument();
  });

  it("Should render the main message", () => {
    render(<ThankYouMessage />);
    const message = screen.getByText(
      /Vi har tagit emot ditt meddelande och återkommer till dig inom kort/i
    );
    expect(message).toBeInTheDocument();
  });

  it("Should render the time notice", () => {
    render(<ThankYouMessage />);
    const timeNotice = screen.getByText(
      /Vi återkopplar vanligvis inom 24 timmar på vardagar/i
    );
    expect(timeNotice).toBeInTheDocument();
  });

  it("Should render the link to home page", () => {
    render(<ThankYouMessage />);
    const linkText = screen.getByText("Till startsidan");
    expect(linkText).toBeInTheDocument();
    expect(linkText.closest("a")).toHaveAttribute("href", "/");
  });

  it("Should render all icons", () => {
    render(<ThankYouMessage />);
    const icons = screen.getAllByRole("img", { hidden: true });
    expect(icons).toHaveLength(3);
  });
});
