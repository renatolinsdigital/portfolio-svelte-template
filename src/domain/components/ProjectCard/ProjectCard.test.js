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

// test("ProjectCard does not render if project is not provided", () => {
//   const { queryByTestId } = render(ProjectCard);

//   expect(queryByTestId("project-card")).toBeNull();
// });

// test("ProjectCard renders correctly with empty project", () => {
//   const project = {};

//   const { queryByTestId } = render(ProjectCard, {
//     props: { project },
//   });

//   expect(queryByTestId("project-card")).toBeTruthy();
// });
