import { expect } from "vitest";
import Link from "./Link.svelte";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";

describe("Link", () => {
  it("renders with default properties", () => {
    render(Link);
    expect(screen.getByTestId("link")).toHaveClass("link color-default");
    expect(screen.getByTestId("link")).toHaveAttribute("target", "_self");
  });

  it("renders with custom properties", () => {
    render(Link, {
      props: {
        isBold: false,
        margin: "10px",
        padding: "5px",
        target: "_blank",
        fontSizeName: "large",
        colorVariant: "primary",
        ariaLabel: "Visit Example",
        rel: "noopener noreferrer",
        href: "https://example.com",
        customClass: "custom-class",
        dataTestId: "custom-test-id",
      },
    });
    expect(screen.getByTestId("custom-test-id")).toHaveClass(
      "link color-primary custom-class"
    );
    expect(screen.getByTestId("custom-test-id")).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByTestId("custom-test-id")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
    expect(screen.getByTestId("custom-test-id")).toHaveAttribute(
      "aria-label",
      "Visit Example"
    );
    expect(screen.getByTestId("custom-test-id")).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByTestId("custom-test-id")).toHaveStyle({
      margin: "10px",
      padding: "5px",
      fontSize: "1.125rem",
    });
  });
});
