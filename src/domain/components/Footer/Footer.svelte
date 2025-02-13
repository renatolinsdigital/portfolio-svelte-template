<script lang="ts">
  import "./Footer.scss";
  import { fade } from "svelte/transition";
  import GitHub from "../../../icons/GitHub.svelte";
  import LinkedIn from "../../../icons/LinkedIn.svelte";
  import Text from "../../../shared/components/Text/Text.svelte";
  import Link from "../../../shared/components/Link/Link.svelte";

  export let year = new Date().getFullYear();
</script>

<footer class="footer-container" transition:fade={{ duration: 300 }}>
  <Text colorVariant="low-contrast">© {year} Portfolio Website Template</Text>
  <Text customClass="separator" colorVariant="low-contrast">-</Text>
  <Text colorVariant="low-contrast">
    Made with Svelte by
    <Link
      target="_blank"
      rel="noopener noreferrer"
      colorVariant="low-contrast"
      ariaLabel="LinkedIn Profile"
      href="https://www.linkedin.com/in/renatolinsdigital/"
    >
      Renato Lins
    </Link>
  </Text>

  <div class="social-links">
    <Link
      target="_blank"
      ariaLabel="GitHub"
      rel="noopener noreferrer"
      colorVariant="low-contrast"
      href="https://github.com/renatolinsdigital/"
    >
      <GitHub />
    </Link>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="LinkedIn Profile"
      colorVariant="low-contrast"
      href="https://www.linkedin.com/in/renatolinsdigital/"
    >
      <LinkedIn />
    </Link>
  </div>
</footer>
