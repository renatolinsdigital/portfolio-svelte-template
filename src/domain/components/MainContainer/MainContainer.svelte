<script>
  import "./MainContainer.scss";
  export let dataTestId = "main-container";
</script>

<main class="main" data-testid={dataTestId}>
  <slot></slot>
</main>
