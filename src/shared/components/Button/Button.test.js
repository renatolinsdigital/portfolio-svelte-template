import "@testing-library/jest-dom";
import Button from "./Button.svelte";
import { expect, test, vi } from "vitest";
import ButtonWrapper from "./ButtonWrapper.svelte";
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

test("Button respects disabled state", () => {
  render(Button, {
    props: {
      isDisabled: true,
    },
  });
  expect(screen.getByTestId("button")).toBeDisabled();
});

test("Button displays children correctly", () => {
  render(ButtonWrapper);

  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

test("Button handles different types", () => {
  render(Button, {
    props: {
      type: "submit",
    },
  });
  expect(screen.getByTestId("button")).toHaveAttribute("type", "submit");
});

test("Button has correct aria-label", () => {
  render(Button, {
    props: {
      ariaLabel: "Test Button",
    },
  });
  expect(screen.getByTestId("button")).toHaveAttribute(
    "aria-label",
    "Test Button"
  );
});
