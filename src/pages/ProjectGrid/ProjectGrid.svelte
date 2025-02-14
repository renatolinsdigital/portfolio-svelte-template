<script lang="ts">
  import "./ProjectGrid.scss";
  import { onMount } from "svelte";
  import Text from "../../shared/components/Text/Text.svelte";
  import type { Project } from "../../domain/models/Project.model";
  import Pagination from "../../shared/components/Pagination/Pagination.svelte";
  import ProjectCard from "../../domain/components/ProjectCard/ProjectCard.svelte";
  import BoxContainer from "../../shared/components/BoxContainer/BoxContainer.svelte";

  let currentPage = 1;
  const itemsPerPage = 6;
  let projects: Project[] = [];
  let paginatedProjects: Project[] = [];

  onMount(() => {
    projects = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      title: `Project ${i + 1}`,
      image: "https://placehold.co/600x400",
      description: `Description of project ${i + 1}`,
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
  <div class="projects" data-testid="projects">
    {#each paginatedProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
  {#if projects.length > itemsPerPage}
    <Pagination
      {itemsPerPage}
      items={projects}
      onPageChange={handlePageChange}
    />
  {/if}
{:else}
  <BoxContainer justifyContent="center" padding="4rem 0 0">
    <Text colorVariant="low-contrast">- No projects to display yet -</Text>
  </BoxContainer>
{/if}
