import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";
import "@testing-library/jest-dom";

// mocka next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

// mocka fetch
global.fetch = jest.fn();

describe("Contact", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("Should render all input fields and the message textarea", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/förnamn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/efternamn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/epost/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/meddelande/i)).toBeInTheDocument();
  });

  it("Should show validation error when field is touched and invalid", async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText(/epostadress/i);

    fireEvent.change(emailInput, { target: { value: "not-an-email" } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });

  it("Should submit form and calls fetch", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/förnamn/i), {
      target: { value: "Test" },
    });
    fireEvent.change(screen.getByLabelText(/efternamn/i), {
      target: { value: "User" },
    });
    fireEvent.change(screen.getByLabelText(/epost/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/telefon/i), {
      target: { value: "12345678" },
    });
    fireEvent.change(screen.getByLabelText(/meddelande/i), {
      target: { value: "Hej!" },
    });

    fireEvent.click(screen.getByRole("button", { name: /skicka meddelande/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
