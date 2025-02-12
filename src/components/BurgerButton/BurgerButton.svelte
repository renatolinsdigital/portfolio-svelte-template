<script lang="ts">
  export let onClick: () => void;
  import "./BurgerButton.scss";

  const strokeWidth: number = 4;
</script>

<button
  class="burger-menu"
  on:click={onClick}
  aria-label="Open navigation menu"
>
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="5"
      y1="7"
      x2="25"
      y2="7"
      stroke="black"
      stroke-width={strokeWidth}
    />
    <line
      x1="5"
      y1="15"
      x2="25"
      y2="15"
      stroke="black"
      stroke-width={strokeWidth}
    />
    <line
      x1="5"
      y1="23"
      x2="25"
      y2="23"
      stroke="black"
      stroke-width={strokeWidth}
    />
  </svg>
</button>
