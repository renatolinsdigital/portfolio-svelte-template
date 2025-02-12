<script lang="ts">
  import "./Pagination.scss";
  import Button from "../../components/Button/Button.svelte";

  let currentPage = 1;
  const visibleGoToPages = 3;
  export let itemsPerPage = 0;
  export let items: any[] = [];
  let hasMorePagesVisible = true;
  export let onPageChange: (page: number) => void;

  $: totalPages = Math.ceil(items.length / itemsPerPage);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      onPageChange(currentPage);
    }
  };

  const getVisiblePages = () => {
    const half = Math.floor(visibleGoToPages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + visibleGoToPages - 1);
    if (end - start < visibleGoToPages - 1) {
      start = Math.max(1, end - visibleGoToPages + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
</script>

<div class="pagination">
  <Button
    onClick={() => changePage(currentPage - 1)}
    isDisabled={currentPage === 1}>Previous</Button
  >
  <span>Page {currentPage} of {totalPages}</span>
  <Button
    onClick={() => changePage(currentPage + 1)}
    isDisabled={currentPage === totalPages}>Next</Button
  >

  {#if hasMorePagesVisible && totalPages > visibleGoToPages && currentPage > Math.ceil(visibleGoToPages / 2)}
    <span>...</span>
  {/if}
  {#each getVisiblePages() as page}
    <Button onClick={() => changePage(page)} isDisabled={currentPage === page}
      >{page}</Button
    >
  {/each}
  {#if hasMorePagesVisible && totalPages > visibleGoToPages && currentPage < totalPages - Math.floor(visibleGoToPages / 2)}
    <span>...</span>
  {/if}
</div>
