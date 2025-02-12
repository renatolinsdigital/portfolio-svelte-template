<script lang="ts">
  import "./ProjectGrid.scss";
  import { onMount } from "svelte";
  import Button from "../Button/Button.svelte";
  import type { Project } from "./ProjectGrid.model";

  let projects: Project[] = [];
  let currentPage: number = 1;
  const itemsPerPage: number = 6;

  onMount(() => {
    projects = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      title: `Project ${i + 1}`,
      description: `Description of project ${i + 1}`,
      image: "https://placehold.co/600x400",
    }));

    currentPage = projects.length > 0 ? 1 : 0;
  });

  const totalPages = (): number => Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = (): Project[] => {
    const start = (currentPage - 1) * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
  };

  const nextPage = (): void => {
    if (currentPage < totalPages()) currentPage++;
  };

  const previousPage = (): void => {
    if (currentPage > 1) currentPage--;
  };
</script>

{#if projects.length > 0}
  <div class="project-grid">
    {#each paginatedProjects() as project}
      <div class="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    {/each}
  </div>

  <div class="pagination">
    <Button onClick={previousPage} isDisabled={currentPage === 1}
      >Previous</Button
    >
    <span>Page {currentPage} of {totalPages()}</span>
    <Button onClick={nextPage} isDisabled={currentPage === totalPages()}
      >Next</Button
    >
  </div>
{/if}
