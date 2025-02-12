<script lang="ts">
  import "./Button.scss";
  export let ariaLabel = "";
  export let isDisabled = false;
  export let onClick: () => void = () => {};
  export let variant: "primary" | "secondary" | "tertiary" | "transparent" =
    "primary";
</script>

<button
  disabled={isDisabled}
  aria-label={ariaLabel}
  class={`button ${variant}`}
  on:click={isDisabled ? null : onClick}
>
  <slot></slot>
</button>
