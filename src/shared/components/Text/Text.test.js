import "@testing-library/jest-dom";
import Text from "./Text.svelte";
import { expect, test } from "vitest";
import TextWrapper from "./TextWrapper.svelte";
import { render, screen } from "@testing-library/svelte";

test("Text renders correctly", () => {
  render(Text);
  expect(screen.getByTestId("text")).toBeInTheDocument();
});

test("Text applies custom class", () => {
  render(Text, {
    props: {
      customClass: "custom-text-class",
    },
  });
  expect(screen.getByTestId("text")).toHaveClass("custom-text-class");
});

test("Text displays children correctly", () => {
  render(TextWrapper);

  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

test("Text handles h1 tag correctly", () => {
  render(Text, {
    props: {
      tag: "h1",
    },
  });
  const textElement = screen.getByTestId("text");
  expect(textElement.tagName).toBe("H1");
});

test("Text has correct color variant", () => {
  render(Text, {
    props: {
      colorVariant: "primary",
    },
  });
  expect(screen.getByTestId("text")).toHaveClass("color-primary");
});

test("Text has correct font size", () => {
  render(Text, {
    props: {
      fontSizeName: "large",
    },
  });
  expect(screen.getByTestId("text")).toHaveStyle("font-size: 1.125rem;");
});

test("Text is bold", () => {
  render(Text, {
    props: {
      isBold: true,
    },
  });
  expect(screen.getByTestId("text")).toHaveClass("bold");
});

test("Text has correct margin", () => {
  render(Text, {
    props: {
      margin: "10px",
    },
  });
  expect(screen.getByTestId("text")).toHaveStyle("margin: 10px;");
});

test("Text has correct padding", () => {
  render(Text, {
    props: {
      padding: "10px",
    },
  });
  expect(screen.getByTestId("text")).toHaveStyle("padding: 10px;");
});
