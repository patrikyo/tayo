import { render, screen } from "@testing-library/react";
import ServiceOverview from "./ServiceOverview";
import serviceCards from "@/app/data/serviceCards";
import "@testing-library/jest-dom";

describe("ServiceOverview", () => {
  it("Should render the main title and description", () => {
    render(<ServiceOverview />);

    const title = screen.getByText("Våra tjänster");
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      /Med stor kunskap inom rulltrappor och hissar/i
    );
    expect(description).toBeInTheDocument();
  });

  it("Should renders all service cards", () => {
    render(<ServiceOverview />);

    serviceCards.forEach((card) => {
      const cardTitle = screen.getByText(card.title);
      expect(cardTitle).toBeInTheDocument();
    });

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(serviceCards.length);
  });
});
