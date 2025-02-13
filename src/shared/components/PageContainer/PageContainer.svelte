<script lang="ts">
  import "./PageContainer.scss";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
</script>

<div
  class="page-container"
  transition:fly={{ y: 20, duration: 1000, easing: cubicOut }}
>
  <slot></slot>
</div>
