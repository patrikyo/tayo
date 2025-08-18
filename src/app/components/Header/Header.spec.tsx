import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders the site title with link to home", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { name: /tayo/i });
    expect(title).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /tayo/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /hem/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /kontakta/i })).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("renders the hamburger menu", () => {
    render(<Header />);
    // The hamburger menu has a button inside
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the elevator icon", () => {
    render(<Header />);
    // FontAwesome icons render as <svg>
    const icon = screen.getByTestId("elevator-icon");
    expect(icon).toBeInTheDocument();
  });
});
