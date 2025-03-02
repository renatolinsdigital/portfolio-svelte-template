import { vi } from "vitest";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import Modal from "./Modal.svelte";
import ModalWrapper from "./ModalWrapper.svelte";
import { render, fireEvent, waitFor } from "@testing-library/svelte";

describe("Modal", () => {
  it("renders correctly and adds the 'no-scroll' class to the document", async () => {
    const onClose = vi.fn();
    const { getByTestId } = render(Modal, { props: { onClose } });
    expect(getByTestId("modal-close")).toBeInTheDocument();
    await waitFor(() => expect(document.body).toHaveClass("no-scroll"));
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    const { getByTestId } = render(Modal, { props: { onClose } });
    const closeButton = getByTestId("modal-close");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose when escape key is pressed", async () => {
    const onClose = vi.fn();
    render(Modal, { props: { onClose } });
    fireEvent.keyDown(document.body, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("renders children content", () => {
    const { getByText } = render(ModalWrapper);
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
