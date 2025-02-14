<script lang="ts">
  import "./Navigation.scss";
  import { onDestroy } from "svelte";
  import { deviceStore } from "../../../stores/";
  import Link from "../../../shared/components/Link/Link.svelte";

  let isMobile: boolean;

  const deviceUnsubscribe = deviceStore.subscribe((value) => {
    isMobile = value.isMobile;
  });

  onDestroy(() => {
    deviceUnsubscribe();
  });
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
