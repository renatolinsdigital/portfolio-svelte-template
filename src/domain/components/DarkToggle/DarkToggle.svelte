<script lang="ts">
  let isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDark);

  function toggleDarkMode() {
    isDark = !isDark;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", String(isDark));
  }
</script>

<button on:click={toggleDarkMode}>
  {isDark ? "To Light Mode" : "To Dark Mode"}
</button>

<style>
  button {
    margin: 1rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: grey;
  }
</style>
