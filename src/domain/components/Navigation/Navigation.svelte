<script lang="ts">
  import "./Navigation.scss";
  import { device } from "../../../stores/deviceStore";
  import Link from "../../../shared/components/Link/Link.svelte";

  $: isMobile = $device.isMobile;
</script>

<nav class="navigation" class:mobile={isMobile}>
  <ul>
    <li>
      <Link href="#projects" fontSizeName={isMobile ? "extraLarge" : "default"}
        >Projects</Link
      >
    </li>
    <li>
      <Link href="#about" fontSizeName={isMobile ? "extraLarge" : "default"}
        >About Me</Link
      >
    </li>
    <li>
      <Link href="#contact" fontSizeName={isMobile ? "extraLarge" : "default"}
        >Contact</Link
      >
    </li>
  </ul>
</nav>
