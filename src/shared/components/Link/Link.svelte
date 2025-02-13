<script lang="ts">
  import "./Link.scss";
  import type { FontSizeName } from "./Link.model";

  export let isBold = true;
  export let customClass = "";
  export let fontSizeName: FontSizeName = "default";

  export let colorVariant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "low-contrast"
    | "default" = "default";

  export let margin: string | undefined = undefined;
  export let padding: string | undefined = undefined;

  export let href: string;
  export let rel: string = "";
  export let ariaLabel: string = "";
  export let target: string = "_self";

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

<a
  {rel}
  {href}
  {target}
  aria-label={ariaLabel}
  class={`link color-${colorVariant} ${customClass} ${isBold ? "bold" : ""}`}
  style={`${margin ? `margin: ${margin};` : ""}${padding ? ` padding: ${padding};` : ""} font-size: ${FONT_SIZES[fontSizeName]};`}
>
  <slot />
</a>
