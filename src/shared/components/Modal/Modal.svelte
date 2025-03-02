<script lang="ts">
  import "./Modal.scss";
  export let isMobile = false;
  export let dataTestId = "modal";
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import Button from "../Button/Button.svelte";

  export let onClose: () => void;

  onMount(() => {
    document.body.classList.add("no-scroll");
    document.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    document.body.classList.remove("no-scroll");
    document.removeEventListener("keydown", handleKeydown);
  });

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") onClose();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
  on:click={onClose}
  class="modal-container"
  class:mobile={isMobile}
  data-testid={dataTestId}
  on:keydown={handleKeydown}
  transition:fade={{ duration: 200 }}
>
  <div class="modal-content" on:click|stopPropagation>
    <div class="modal-header">
      <Button
        onClick={onClose}
        dataTestId="modal-close"
        colorVariant="transparent"
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
