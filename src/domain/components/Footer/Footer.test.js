import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import Footer from "./Footer.svelte";

test("Footer", () => {
  render(Footer, {
    props: {
      year: new Date().getFullYear(),
    },
  });

  expect(
    screen.getByText(`© ${new Date().getFullYear()} Portfolio Website Template`)
  ).toBeTruthy();
});
