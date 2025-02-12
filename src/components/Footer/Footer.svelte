<script>
  import "./Footer.scss";
  import { fade } from "svelte/transition";
  import GitHub from "../../icons/GitHub.svelte";
  import LinkedIn from "../../icons/LinkedIn.svelte";

  export let year = new Date().getFullYear();
</script>

<footer class="footer-container" transition:fade={{ duration: 300 }}>
  <p>© {year} Portfolio Website Template</p>
  <p class="separator">-</p>
  <p>
    Made with Svelte by
    <a
      href="https://www.linkedin.com/in/renatolinsdigital/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Renato Lins
    </a>
  </p>

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
