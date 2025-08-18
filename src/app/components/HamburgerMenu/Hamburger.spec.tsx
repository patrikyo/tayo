import { render, screen, fireEvent } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";
import "@testing-library/jest-dom";

const links = [
  { title: "Hem", href: "/" },
  { title: "Kontakt", href: "/contact" },
];

describe("HamburgerMenu", () => {
  it("Should render toggle btn", () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("Should show naivigation when btn is clicked", () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    const navDiv = screen.getByRole("navigation", { hidden: true });
    expect(navDiv).toBeInTheDocument();

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("Should alternate icon when menu is opended/closed", () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByRole("button");

    // När stängd -> faBars
    expect(screen.getByTestId("bars-icon")).toBeInTheDocument();

    // Klicka -> öppna meny
    fireEvent.click(button);

    // När öppen -> faClose
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });
});
