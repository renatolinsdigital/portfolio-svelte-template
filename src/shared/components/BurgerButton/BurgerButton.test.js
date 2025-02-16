import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import BurgerButton from "./BurgerButton.svelte";
import { render, screen } from "@testing-library/svelte";

test("BurgerButton renders and displays burger icon correctly", () => {
  render(BurgerButton);
  expect(screen.getByTestId("burger-button")).toBeInTheDocument();
});

test("BurgerButton onClick function is working", () => {
  const mockOnClick = vi.fn();
  render(BurgerButton, {
    props: {
      onClick: mockOnClick,
      ariaLabel: "Toggle navigation menu",
    },
  });
  screen.getByTestId("burger-button").click();
  expect(mockOnClick).toHaveBeenCalled();
});
