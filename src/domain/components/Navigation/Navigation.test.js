import { test, expect } from "vitest";
import Navigation from "./Navigation.svelte";
import { render, screen, fireEvent } from "@testing-library/svelte";

test("It renders navigation links", () => {
  render(Navigation);

  const projectsLink = screen.getByText(/projects/i);
  const aboutLink = screen.getByText(/about me/i);
  const contactLink = screen.getByText(/contact/i);

  expect(projectsLink).toBeTruthy();
  expect(aboutLink).toBeTruthy();
  expect(contactLink).toBeTruthy();
});

test("It navigates correctly when a link is clicked", async () => {
  render(Navigation);

  const projectsLink = screen.getByText(/projects/i);
  await fireEvent.click(projectsLink);

  window.location.hash = "#projects";

  expect(window.location.hash).toBe("#projects");
});
