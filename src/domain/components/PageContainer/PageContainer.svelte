<script>
  import "./PageContainer.scss";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  export let dataTestId = "page-container";
</script>

<div
  class="page-container"
  data-testid={dataTestId}
  transition:fly={{ y: 20, duration: 1000, easing: cubicOut }}
>
  <slot></slot>
</div>
