<script lang="ts">
  import "./Button.scss";
  export let ariaLabel = "";
  export let isDisabled = false;
  export let minWidth: "0" | "90" | "120" | "150" | "180" | "220" = "0";
  export let onClick: () => void = () => {};
  export let colorVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "transparent"
    | "default" = "default";
</script>

<button
  disabled={isDisabled}
  aria-label={ariaLabel}
  class={`button color-${colorVariant} min-width-${minWidth}`}
  on:click={isDisabled ? null : onClick}
>
  <slot></slot>
</button>
