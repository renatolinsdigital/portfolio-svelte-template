<script>
  import "./Modal.scss";
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  export let onIsOpenToggle;
  export let isMobile = false;

  onMount(() => {
    document.body.classList.add("no-scroll");
  });

  onDestroy(() => {
    document.body.classList.remove("no-scroll");
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
  class="modal"
  class:mobile={isMobile}
  on:click={onIsOpenToggle}
  transition:fade={{ duration: 200 }}
>
  <div class="modal-content" on:click|stopPropagation>
    <div class="modal-header">
      <button
        class="close-btn"
        on:click={onIsOpenToggle}
        aria-label="Close navigation menu"
      >
        &times;
      </button>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</div>
