<script lang="ts">
  import Text from "./Text.svelte";
  export let tag: string = "span"; // Allow any string for the tag
</script>

<Text customClass="custom-class">Test Content</Text>

<svelte:element this={tag} class="text-wrapper">
  <slot></slot>
</svelte:element>
