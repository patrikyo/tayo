import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renderar rubriken 'Rulltrappor & Hissar'", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", {
      name: /rulltrappor & hissar/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("har container-diven med rätt css-klass", () => {
    const { container } = render(<HeroSection />);
    const div = container.firstChild;
    expect(div).toHaveClass("container");
  });
});
