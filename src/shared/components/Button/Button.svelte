<script lang="ts">
  import "./Button.scss";
  export let isBold = true;
  export let ariaLabel = "";
  export let customClass = "";
  export let isDisabled = false;
  export let dataTestId = "button";
  export let onClick: () => void = () => {};
  export let type: "button" | "submit" | "reset" = "button";
  export let sizeVariant: "default" | "small" | "big" = "default";
  export let minWidth: "0" | "90" | "120" | "150" | "180" | "220" = "0";
  export let colorVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "transparent"
    | "default" = "default";
</script>

<button
  {type}
  disabled={isDisabled}
  aria-label={ariaLabel}
  data-testid={dataTestId}
  class={`button color-${colorVariant} min-width-${minWidth} size-${sizeVariant} ${isBold ? "bold" : ""} ${customClass}`}
  on:click={isDisabled ? null : onClick}
>
  <slot></slot>
</button>
