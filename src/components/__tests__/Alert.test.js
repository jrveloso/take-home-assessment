import { render, screen, cleanup } from "@testing-library/react";
import Alert from "../Alert";

afterEach(() => {
  cleanup();
});

test("should render successful alert component", () => {
  const success = true;
  render(<Alert success={success} />);
  const alertElement = screen.getByTestId("alert");
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveTextContent("Submission successful");
});
test("should render failed alert component", () => {
  const success = false;
  render(<Alert success={success} />);
  const alertElement = screen.getByTestId("alert");
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveTextContent("Submission failed");
});
