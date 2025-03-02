<script lang="ts">
  import "./Text.scss";
  export let dataTestId = "text";

  export let isBold: boolean = false;
  export let customClass: string = "";
  export let margin: string = "";
  export let padding: string = "";
  export let tag: "p" | "span" | "h1" | "h2" | "h3" = "span";
  export let fontSizeName:
    | "smallest"
    | "small"
    | "default"
    | "large"
    | "extraLarge"
    | "huge"
    | "jumbo"
    | "biggest" = "default";

  export let colorVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "low-contrast"
    | "default" = "default";

  const FONT_SIZES: Record<NonNullable<typeof fontSizeName>, string> = {
    smallest: "0.75rem",
    small: "0.875rem",
    default: "1rem",
    large: "1.125rem",
    extraLarge: "1.375rem",
    huge: "1.5rem",
    jumbo: "2rem",
    biggest: "2.5rem",
  };
</script>

<svelte:element
  this={tag}
  data-testid={dataTestId}
  class={`text color-${colorVariant} ${customClass} ${isBold ? "bold" : ""}`}
  style={`${margin ? `margin: ${margin};` : ""}${padding ? ` padding: ${padding};` : ""} font-size: ${FONT_SIZES[fontSizeName]};`}
>
  <slot />
</svelte:element>
