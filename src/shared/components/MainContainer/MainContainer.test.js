import { expect } from "vitest";
import "@testing-library/jest-dom";
import MainContainer from "./MainContainer.svelte";
import { render, screen } from "@testing-library/svelte";
import MainContainerWrapper from "./MainContainerWrapper.svelte";

describe("MainContainer", () => {
  it("renders", () => {
    render(MainContainer);
    expect(screen.getByTestId("main-container")).toBeInTheDocument();
  });

  it("renders with custom dataTestId", () => {
    render(MainContainer, { props: { dataTestId: "custom-test-id" } });
    expect(screen.getByTestId("custom-test-id")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(MainContainerWrapper);
    expect(screen.getByRole("main")).toHaveTextContent("Test Content");
  });
});
