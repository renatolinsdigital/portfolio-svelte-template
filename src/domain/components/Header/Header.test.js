import Header from "./Header.svelte";
import { expect, test } from "vitest";
import { deviceStore } from "../../../stores/";
import { render } from "@testing-library/svelte";

test("Header renders correctly", () => {
  const { getByText } = render(Header);
  expect(getByText("Hi, I'm John Doe")).toBeTruthy();
});

test("Header behaves correctly on desktop", async () => {
  deviceStore.set({ isMobile: false, screenWidth: 1024 });
  const { getByTestId, queryByTestId, getByRole } = render(Header);

  expect(getByTestId("navigation")).toBeTruthy();
  expect(queryByTestId("burger-button")).toBeNull();

  expect(getByRole("link", { name: /Projects/i })).toBeTruthy();
  expect(getByRole("link", { name: /About Me/i })).toBeTruthy();
  expect(getByRole("link", { name: /Contact/i })).toBeTruthy();
});

test("Header behaves correctly on mobile", async () => {
  deviceStore.set({ isMobile: true, screenWidth: 375 });
  const { getByTestId, queryByTestId } = render(Header);
  expect(getByTestId("burger-button")).toBeTruthy();
  expect(queryByTestId("navigation")).toBeNull();
});
