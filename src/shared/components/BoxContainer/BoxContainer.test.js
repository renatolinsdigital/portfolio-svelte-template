import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import BoxContainer from "./BoxContainer.svelte";
import BoxContainerWrapper from "./BoxContainerWrapper.svelte";
import "@testing-library/jest-dom";

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
      right: "40px",
      bottom: "50px",
      cursor: "pointer",
      border: "1px solid black",
      margin: "10px",
      padding: "20px",
      gridRow: "1",
      overflow: "hidden",
      position: "absolute",
      minWidth: "100px",
      transform: "translateX(10px)",
      maxWidth: "200px",
      overflowX: "auto",
      overflowY: "auto",
      maxHeight: "300px",
      alignSelf: "flex-start",
      minHeight: "400px",
      borderTop: "2px solid #ff0000",
      alignItems: "center",
      gridColumn: "2",
      borderLeft: "3px solid #00ff00",
      borderWidth: "4px",
      borderStyle: "dashed",
      borderRight: "5px solid #0000ff",
      borderBottom: "6px solid #ffff00",
      borderRadius: "10px",
      borderColor: "#ffa500",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#ffa500",
    },
  });
  const boxContainer = screen.getByTestId("box-container");
  expect(boxContainer).toHaveStyle({
    gap: "10px",
    top: "20px",
    flex: "1",
    left: "30px",
    right: "40px",
    bottom: "50px",
    cursor: "pointer",
    border: "1px solid black",
    margin: "10px",
    padding: "20px",
    "grid-row": "1",
    overflow: "hidden",
    position: "absolute",
    "min-width": "100px",
    transform: "translateX(10px)",
    "max-width": "200px",
    "overflow-x": "auto",
    "overflow-y": "auto",
    "max-height": "300px",
    "align-self": "flex-start",
    "min-height": "400px",
    "border-top": "2px solid #ff0000",
    "align-items": "center",
    "grid-column": "2",
    "border-left": "3px solid #00ff00",
    "border-width": "4px",
    "border-style": "dashed",
    "border-right": "5px solid #0000ff",
    "border-bottom": "6px solid #ffff00",
    "border-radius": "10px",
    "border-color": "#ffa500",
    "flex-direction": "column",
    "justify-content": "space-between",
    "background-color": "#ffa500",
  });
});
