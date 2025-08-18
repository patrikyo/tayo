import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import "@testing-library/jest-dom";
import Direction from "@/app/models/enums/direction.enum";

const links = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact" },
];

describe("Navigation", () => {
  it("Should render all links with correct hrefs", () => {
    render(<Navigation links={links} direction={Direction.Row} />);
    links.forEach((link) => {
      const anchor = screen.getByText(link.title);
      expect(anchor).toBeInTheDocument();
      expect(anchor.closest("a")).toHaveAttribute("href", link.href);
    });
  });

  it("Should applies row class when direction is Row", () => {
    const { container } = render(
      <Navigation links={links} direction={Direction.Row} />
    );
    const ul = container.querySelector("ul");
    expect(ul).toHaveClass("row");
  });

  it("Should applies column class when direction is Column", () => {
    const { container } = render(
      <Navigation links={links} direction={Direction.Column} />
    );
    const ul = container.querySelector("ul");
    expect(ul).toHaveClass("column");
  });
});
