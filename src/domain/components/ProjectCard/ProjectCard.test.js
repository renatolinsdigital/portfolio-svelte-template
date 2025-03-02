import { expect, test } from "vitest";
import ProjectCard from "./ProjectCard.svelte";
import { render } from "@testing-library/svelte";

test("ProjectCard render properties correctly", () => {
  const project = {
    id: 1,
    image: "path/to/image.jpg",
    title: "Test Project",
    description: "This is a test project description.",
  };

  const { getByText, getByAltText } = render(ProjectCard, {
    props: { project },
  });

  expect(getByAltText("Test Project")).toBeTruthy();
  expect(getByText("Test Project")).toBeTruthy();
  expect(getByText("This is a test project description.")).toBeTruthy();
});
