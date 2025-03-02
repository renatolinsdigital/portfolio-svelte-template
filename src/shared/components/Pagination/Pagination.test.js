import "@testing-library/jest-dom";
import { expect, vi } from "vitest";
import Pagination from "./Pagination.svelte";
import { render, screen, fireEvent } from "@testing-library/svelte";

describe("Pagination Component", () => {
  it("renders pagination with buttons", () => {
    render(Pagination, {
      props: {
        itemsPerPage: 1,
        items: [1, 2, 3, 4, 5],
        onPageChange: vi.fn(),
      },
    });

    expect(screen.getByTestId("pagination")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    expect(screen.getByText("<<")).toBeInTheDocument();
    expect(screen.getByText("<")).toBeInTheDocument();
    expect(screen.getByText(">")).toBeInTheDocument();
    expect(screen.getByText(">>")).toBeInTheDocument();
  });

  it("calls onPageChange when a page button is clicked", async () => {
    const onPageChangeMock = vi.fn();
    render(Pagination, {
      props: {
        itemsPerPage: 1,
        items: [1, 2, 3, 4, 5],
        onPageChange: onPageChangeMock,
      },
    });

    const pageButtons = screen.getAllByRole("button");
    const pageTwoButton = pageButtons.find((btn) => btn.textContent === "2");

    if (!pageTwoButton) throw new Error("Page button '2' not found");

    await fireEvent.click(pageTwoButton);

    expect(onPageChangeMock).toHaveBeenCalled();
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it("starts with previous and first page buttons disabled", () => {
    render(Pagination, {
      props: {
        itemsPerPage: 1,
        onPageChange: vi.fn(),
        items: [1, 2, 3, 4, 5],
      },
    });

    expect(screen.getByRole("button", { name: "<" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "<<" })).toBeDisabled();
  });

  it("disables next buttons on the last page", async () => {
    render(Pagination, {
      props: {
        itemsPerPage: 1,
        onPageChange: vi.fn(),
        items: [1, 2, 3, 4, 5],
      },
    });

    const pageButtons = screen.getAllByRole("button");
    const lastPageButton = pageButtons.find((btn) => btn.textContent === ">>");

    if (!lastPageButton) throw new Error("Last page button not found");

    await fireEvent.click(lastPageButton);

    expect(screen.getByRole("button", { name: ">>" })).toBeDisabled();
    expect(screen.getByRole("button", { name: ">" })).toBeDisabled();
  });

  it("calls onPageChange when navigating to the first and last pages", async () => {
    const onPageChangeMock = vi.fn();
    render(Pagination, {
      props: {
        itemsPerPage: 1,
        items: [1, 2, 3, 4, 5],
        onPageChange: onPageChangeMock,
      },
    });

    await fireEvent.click(screen.getByRole("button", { name: ">" }));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);

    await fireEvent.click(screen.getByRole("button", { name: ">" }));
    expect(onPageChangeMock).toHaveBeenCalledWith(3);

    await fireEvent.click(screen.getByRole("button", { name: "<" }));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);

    await fireEvent.click(screen.getByRole("button", { name: "<" }));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });
});
