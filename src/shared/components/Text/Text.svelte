<script lang="ts">
  import "./Text.scss";
  export let isBold = false;
  export let customClass = "";
  import type { FontSizeName } from "./Text.model";
  export let fontSizeName: FontSizeName = "default";
  export let tag: "p" | "span" | "h1" | "h2" | "h3" = "p";
  export let colorVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "low-contrast"
    | "default" = "default";

  export let margin:
    | string
    | Partial<Record<"top" | "left" | "right" | "bottom", string>> = {};
  export let padding:
    | string
    | Partial<Record<"top" | "left" | "right" | "bottom", string>> = {};

  $: dynamicMargin =
    typeof margin === "string"
      ? margin
      : `${margin.top ?? "0"} ${margin.right ?? "0"} ${margin.bottom ?? "0"} ${margin.left ?? "0"}`;

  $: dynamicPadding =
    typeof padding === "string"
      ? padding
      : `${padding.top ?? "0"} ${padding.right ?? "0"} ${padding.bottom ?? "0"} ${padding.left ?? "0"}`;

  const FONT_SIZES: Record<FontSizeName, string> = {
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
  class={`text color-${colorVariant} ${customClass} ${isBold ? "bold" : ""}`}
  style={`margin: ${dynamicMargin}; padding: ${dynamicPadding}; font-size: ${FONT_SIZES[fontSizeName]};`}
>
  <slot />
</svelte:element>
