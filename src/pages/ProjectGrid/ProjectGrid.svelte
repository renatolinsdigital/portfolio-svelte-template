<script lang="ts">
  import "./ProjectGrid.scss";
  import { onMount } from "svelte";
  import type { Project } from "./ProjectGrid.model";
  import Pagination from "../../components/Pagination/Pagination.svelte";

  let currentPage = 1;
  const itemsPerPage = 6;
  let projects: Project[] = [];
  let paginatedProjects: Project[] = [];

  onMount(() => {
    projects = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      title: `Project ${i + 1}`,
      description: `Description of project ${i + 1}`,
      image: "https://placehold.co/600x400",
    }));
    updatePaginatedProjects();
  });

  function updatePaginatedProjects() {
    const start = (currentPage - 1) * itemsPerPage;
    paginatedProjects = projects.slice(start, start + itemsPerPage);
  }

  function handlePageChange(page: number) {
    currentPage = page;
    updatePaginatedProjects();
  }
</script>

{#if paginatedProjects.length > 0}
  <!-- Change condition to check paginatedProjects -->
  <div class="project-grid">
    {#each paginatedProjects as project}
      <div class="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    {/each}
  </div>

  <Pagination {itemsPerPage} items={projects} onPageChange={handlePageChange} />
{:else}
  <p>No projects to display</p>
{/if}
