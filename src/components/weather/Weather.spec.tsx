import { render, screen } from "@testing-library/react";
import { Weather } from "./index";

describe("first test", () => {
  it("should render the weather app", () => {
    render(<Weather />);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });
});
