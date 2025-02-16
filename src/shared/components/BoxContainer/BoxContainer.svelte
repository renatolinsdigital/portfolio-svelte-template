<script lang="ts">
  import { styleTrim } from "../../helpers/styleTrim";

  export let dataTestId = "box-container";

  export let flex: number = 1;
  export let className: string = "";

  export let minWidth: string = "0";
  export let minHeight: string = "auto";
  export let maxWidth: string = "none";
  export let maxHeight: string | undefined = undefined;

  export let isVisible: boolean = true;
  export let isStretched: boolean = true;
  export let flexDirection: string = "row";
  export let position: string = "relative";
  export let isFlexWrapping: boolean = false;
  export let alignSelf: string | undefined = undefined;

  export let borderStyle: string = "solid";
  export let borderColor: string | undefined = undefined;
  export let backgroundColor: string | undefined = undefined;

  export let gap: string | undefined = undefined;
  export let top: string = "auto";
  export let left: string = "auto";
  export let right: string = "auto";
  export let bottom: string = "auto";

  export let cursor: string | undefined = undefined;

  export let margin: string | undefined = undefined;
  export let padding: string | undefined = undefined;
  export let borderWidth: string | undefined = undefined;

  export let gridRow: string | undefined = undefined;
  export let gridColumn: string | undefined = undefined;

  export let overflow: string | undefined = undefined;
  export let overflowX: string | undefined = undefined;
  export let overflowY: string | undefined = undefined;
  export let transform: string | undefined = undefined;

  export let borderRadius: string = "0";
  export let border: string | undefined = undefined;
  export let borderTop: string | undefined = undefined;
  export let borderLeft: string | undefined = undefined;
  export let borderRight: string | undefined = undefined;
  export let borderBottom: string | undefined = undefined;

  export let alignItems:
    | "center"
    | "inherit"
    | "stretch"
    | "initial"
    | "baseline"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | undefined = undefined;

  export let justifyContent:
    | "center"
    | "inherit"
    | "stretch"
    | "initial"
    | "baseline"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | undefined = undefined;
</script>

<div
  class={className}
  data-testid={dataTestId}
  style={styleTrim(`
    ${gap ? `gap: ${gap};` : ""}
    ${top ? `top: ${top};` : ""}
    ${flex ? `flex: ${flex};` : ""}
    ${left ? `left: ${left};` : ""}
    ${right ? `right: ${right};` : ""}
    ${bottom ? `bottom: ${bottom};` : ""}
    ${cursor ? `cursor: ${cursor};` : ""}
    ${border ? `border: ${border};` : ""}
    ${margin ? `margin: ${margin};` : ""}
    ${padding ? `padding: ${padding};` : ""}
    ${gridRow ? `grid-row: ${gridRow};` : ""}
    ${overflow ? `overflow: ${overflow};` : ""}
    ${position ? `position: ${position};` : ""}
    ${minWidth ? `min-width: ${minWidth};` : ""}
    ${transform ? `transform: ${transform};` : ""}
    ${maxWidth ? `max-width: ${maxWidth};` : ""}
    ${overflowX ? `overflow-x: ${overflowX};` : ""}
    ${overflowY ? `overflow-y: ${overflowY};` : ""}
    ${maxHeight ? `max-height: ${maxHeight};` : ""}
    ${alignSelf ? `align-self: ${alignSelf};` : ""}
    ${minHeight ? `min-height: ${minHeight};` : ""}
    ${borderTop ? `border-top: ${borderTop};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
    ${gridColumn ? `grid-column: ${gridColumn};` : ""}
    ${borderLeft ? `border-left: ${borderLeft};` : ""}
    ${borderWidth ? `border-width: ${borderWidth};` : ""}
    ${borderStyle ? `border-style: ${borderStyle};` : ""}
    ${borderRight ? `border-right: ${borderRight};` : ""}
    ${borderBottom ? `border-bottom: ${borderBottom};` : ""}
    ${borderRadius ? `border-radius: ${borderRadius};` : ""}
    ${borderColor ? `border-color: ${borderColor};` : ""}
    ${flexDirection ? `flex-direction: ${flexDirection};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
    display: ${isStretched ? "flex" : "block"};
    visibility: ${isVisible ? "visible" : "hidden"};
    flex-wrap: ${isFlexWrapping ? "wrap" : "nowrap"};
  `)}
>
  <slot></slot>
</div>
