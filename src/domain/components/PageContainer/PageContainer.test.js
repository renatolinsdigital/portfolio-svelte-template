import { expect } from "vitest";
import "@testing-library/jest-dom";
import PageContainer from "./PageContainer.svelte";
import { render, screen } from "@testing-library/svelte";
import PageContainerWrapper from "./PageContainerWrapper.svelte";

describe("PageContainer", () => {
  it("renders", () => {
    render(PageContainer);
    expect(screen.getByTestId("page-container")).toBeInTheDocument();
  });

  it("renders with custom dataTestId", () => {
    render(PageContainer, { props: { dataTestId: "custom-test-id" } });
    expect(screen.getByTestId("custom-test-id")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(PageContainerWrapper);
    expect(screen.getByTestId("page-container-wrapper")).toHaveTextContent(
      "Test Content"
    );
  });
});
