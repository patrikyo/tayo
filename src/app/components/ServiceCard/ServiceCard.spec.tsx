import { render, screen } from "@testing-library/react";
import ServiceCard from "./ServiceCard";
import "@testing-library/jest-dom";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const mockProps = {
  icon: faCoffee,
  title: "Test Service",
  description: "This is a test description",
  button: { text: "Learn More", link: "/learn-more" },
};

describe("ServiceCard", () => {
  it("Should render the icon, title, description and link", () => {
    render(<ServiceCard {...mockProps} />);

    // Check title
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check description
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Check link text and href
    const link = screen.getByText(mockProps.button.text);
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", mockProps.button.link);

    // Check that icon renders (checks SVG presence)
    const svg = screen.getByTestId("icon-svg");
    expect(svg).toBeInTheDocument();
  });
});
