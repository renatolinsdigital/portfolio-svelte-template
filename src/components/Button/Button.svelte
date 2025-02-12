<script lang="ts">
  import "./Button.scss";
  export let isDisabled = false;
  export let onClick: () => void = () => {};
  export let variant: "primary" | "secondary" | "tertiary" = "primary";
</script>

<button
  class={variant}
  disabled={isDisabled}
  on:click={isDisabled ? null : onClick}
>
  <slot></slot>
</button>
