import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import BoxContainer from "./BoxContainer.svelte";
import { render, screen } from "@testing-library/svelte";
import BoxContainerWrapper from "./BoxContainerWrapper.svelte";

test("BoxContainer renders correctly", () => {
  const { container } = render(BoxContainer);
  expect(container).toBeTruthy();
});

test("BoxContainer displays children correctly", () => {
  render(BoxContainerWrapper);

  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

test("BoxContainer applies custom class", () => {
  render(BoxContainer, {
    props: { className: "custom-class" },
  });
  const boxContainer = screen.getByTestId("box-container");
  expect(boxContainer).toHaveClass("custom-class");
});

test("BoxContainer applies CSS properties correctly", () => {
  render(BoxContainer, {
    props: {
      flex: 1,
      gap: "10px",
      top: "20px",
      left: "30px",
      gridRow: "1",
      right: "40px",
      bottom: "50px",
      margin: "10px",
      padding: "20px",
      gridColumn: "2",
      cursor: "pointer",
      minWidth: "100px",
      maxWidth: "200px",
      overflowX: "auto",
      overflowY: "auto",
      maxHeight: "300px",
      overflow: "hidden",
      borderWidth: "4px",
      minHeight: "400px",
      alignItems: "center",
      position: "absolute",
      borderRadius: "10px",
      borderColor: "#ffa500",
      borderStyle: "dashed",
      alignSelf: "flex-start",
      flexDirection: "column",
      border: "1px solid black",
      backgroundColor: "#ffa500",
      transform: "translateX(10px)",
      justifyContent: "space-between",
      borderTop: "2px solid #ff0000",
      borderLeft: "3px solid #00ff00",
      borderRight: "5px solid #0000ff",
      borderBottom: "6px solid #ffff00",
    },
  });
  const boxContainer = screen.getByTestId("box-container");
  expect(boxContainer).toHaveStyle({
    flex: 1,
    gap: "10px",
    top: "20px",
    left: "30px",
    gridRow: "1",
    right: "40px",
    bottom: "50px",
    margin: "10px",
    padding: "20px",
    gridColumn: "2",
    cursor: "pointer",
    minWidth: "100px",
    maxWidth: "200px",
    overflowX: "auto",
    overflowY: "auto",
    maxHeight: "300px",
    overflow: "hidden",
    borderWidth: "4px",
    minHeight: "400px",
    alignItems: "center",
    position: "absolute",
    borderRadius: "10px",
    borderColor: "#ffa500",
    borderStyle: "dashed",
    alignSelf: "flex-start",
    flexDirection: "column",
    border: "1px solid black",
    backgroundColor: "#ffa500",
    transform: "translateX(10px)",
    justifyContent: "space-between",
    borderTop: "2px solid #ff0000",
    borderLeft: "3px solid #00ff00",
    borderRight: "5px solid #0000ff",
    borderBottom: "6px solid #ffff00",
  });
});
