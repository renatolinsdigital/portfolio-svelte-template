<script lang="ts">
  import "./Pagination.scss";
  import Button from "../Button/Button.svelte";
  import Text from "../Text/Text.svelte";

  let currentPage = 1;
  const visibleGoToPages = 3;
  export let itemsPerPage = 0;
  export let items: any[] = [];
  let hasMorePagesVisible = true;
  export let onPageChange: (page: number) => void;

  $: totalPages = Math.ceil(items.length / itemsPerPage);

  $: hasPagesLeft =
    hasMorePagesVisible &&
    totalPages > visibleGoToPages &&
    currentPage > Math.ceil(visibleGoToPages / 2);

  $: hasPagesRight =
    hasMorePagesVisible &&
    totalPages > visibleGoToPages &&
    currentPage < totalPages - Math.floor(visibleGoToPages / 2);

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
    minWidth="120"
    onClick={() => changePage(currentPage - 1)}
    isDisabled={currentPage === 1}>Previous</Button
  >
  <Text tag="span" fontSizeName="small">Page {currentPage} of {totalPages}</Text
  >
  <Button
    minWidth="120"
    onClick={() => changePage(currentPage + 1)}
    isDisabled={currentPage === totalPages}>Next</Button
  >

  <Text
    tag="span"
    customClass={`view-more ${hasPagesLeft ? "visible" : ""}`}
    colorVariant="low-contrast"
  >
    ...</Text
  >

  {#each getVisiblePages() as page}
    <Button onClick={() => changePage(page)} isDisabled={currentPage === page}
      >{page}</Button
    >
  {/each}

  <Text
    tag="span"
    customClass={`view-more ${hasPagesRight ? "visible" : ""}`}
    colorVariant="low-contrast"
  >
    ...
  </Text>
</div>
