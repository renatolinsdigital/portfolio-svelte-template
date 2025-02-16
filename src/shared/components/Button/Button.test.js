import "@testing-library/jest-dom";
import Button from "./Button.svelte";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/svelte";

test("Button renders correctly", () => {
  render(Button);
  expect(screen.getByTestId("button")).toBeInTheDocument();
});

test("Button onClick function is called", () => {
  const mockOnClick = vi.fn();
  render(Button, {
    props: {
      onClick: mockOnClick,
      ariaLabel: "Toggle navigation menu",
    },
  });
  screen.getByTestId("button").click();
  expect(mockOnClick).toHaveBeenCalled();
});

test("Button applies custom class", () => {
  render(Button, {
    props: {
      customClass: "custom-button-class",
    },
  });
  expect(screen.getByTestId("button")).toHaveClass("custom-button-class");
});
