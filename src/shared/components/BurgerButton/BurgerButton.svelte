<script lang="ts">
  import "./BurgerButton.scss";
  export let ariaLabel: string;
  export let onClick: () => void;
  export let dataTestId = "burger-button";
  import Button from "../Button/Button.svelte";
  import Burger from "../../../icons/Burger.svelte";
</script>

<Button {onClick} {ariaLabel} {dataTestId} customClass="burger-button">
  <Burger strokeWidth={4} />
</Button>
