<script lang="ts">
  import "./Footer.scss";
  import Text from "../Text/Text.svelte";
  import { fade } from "svelte/transition";
  import GitHub from "../../icons/GitHub.svelte";
  import LinkedIn from "../../icons/LinkedIn.svelte";

  export let year = new Date().getFullYear();
</script>

<footer class="footer-container" transition:fade={{ duration: 300 }}>
  <Text variation="low-contrast">© {year} Portfolio Website Template</Text>
  <Text customClass="separator" variation="low-contrast">-</Text>
  <Text variation="low-contrast">
    No projects to display Made with Svelte by
    <a
      href="https://www.linkedin.com/in/renatolinsdigital/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Renato Lins
    </a>
  </Text>

  <div class="social-links">
    <a
      href="https://github.com/renatolinsdigital/"
      target="_blank"
      class="icon"
      aria-label="GitHub"
    >
      <GitHub />
    </a>
    <a
      href="https://www.linkedin.com/in/renatolinsdigital/"
      target="_blank"
      class="icon"
      aria-label="LinkedIn"
    >
      <LinkedIn />
    </a>
  </div>
</footer>
