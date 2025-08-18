import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("Should render header 'Om oss'", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", { name: /om oss/i });
    expect(heading).toBeInTheDocument();
  });

  it("Should render descriptiontext", () => {
    render(<Footer />);
    expect(
      screen.getByText(/välkommen till vårt hisskonsultföretag/i)
    ).toBeInTheDocument();
  });

  it("Should have container div with correct classname", () => {
    const { container } = render(<Footer />);
    const div = container.firstChild;
    expect(div).toHaveClass("container");
  });
});
