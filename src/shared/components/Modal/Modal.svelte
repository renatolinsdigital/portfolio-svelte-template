<script lang="ts">
  import "./Modal.scss";
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import Button from "../Button/Button.svelte";

  export let isMobile = false;
  export let onIsOpenToggle: () => void;

  onMount(() => {
    document.body.classList.add("no-scroll");
  });

  onDestroy(() => {
    document.body.classList.remove("no-scroll");
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
  class="modal-container"
  class:mobile={isMobile}
  on:click={onIsOpenToggle}
  transition:fade={{ duration: 200 }}
>
  <div class="modal-content" on:click|stopPropagation>
    <div class="modal-header">
      <Button
        variant="transparent"
        onClick={onIsOpenToggle}
        ariaLabel="Close navigation menu"
      >
        &#10006;
      </Button>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</div>
