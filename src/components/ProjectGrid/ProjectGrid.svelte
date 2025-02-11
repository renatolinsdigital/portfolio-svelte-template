<script>
    import './ProjectGrid.scss'
    import { onMount } from "svelte";
  
    let projects = [];
    let currentPage = 1;
    const itemsPerPage = 9;
  
    
    onMount(() => {
      projects = Array.from({ length: 31 }, (_, i) => ({
        id: i + 1,
        title: `Project ${i + 1}`,
        description: `Description of project ${i + 1}`,
        image: "https://placehold.co/600x400"
      }));
  
          currentPage = projects.length > 0 ? 1 : 0;
    });
  
    function totalPages() {
      return Math.ceil(projects.length / itemsPerPage);
    }
  
    function paginatedProjects() {
      if (projects.length === 0) return [];
      const start = (currentPage - 1) * itemsPerPage;
      return projects.slice(start, start + itemsPerPage);
    }
  
    function nextPage() {
      if (currentPage < totalPages()) currentPage++;
    }
  
    function prevPage() {
      if (currentPage > 1) currentPage--;
    }
  </script>
  
  {#if projects.length > 0}
    <div class="project-grid">
      {#each paginatedProjects() as project}
        <div class="project-card">
          <img src={project.image} alt={project.title}/>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      {/each}
    </div>
  
    <div class="pagination">
      <button on:click={prevPage} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage} of {totalPages()}</span>
      <button on:click={nextPage} disabled={currentPage === totalPages()}>Next</button>
    </div>
  {/if}
  
  