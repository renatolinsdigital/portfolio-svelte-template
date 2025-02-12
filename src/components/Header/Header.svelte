<script lang="ts">
  import "./Header.scss";
  import { onDestroy } from "svelte";
  import Modal from "../Modal/Modal.svelte";
  import svelteLogo from "../../images/svelte.svg";
  import DarkToggle from "../DarkToggle/DarkToggle.svelte";
  import Navigation from "../Navigation/Navigation.svelte";
  import BurgerButton from "../BurgerButton/BurgerButton.svelte";

  let isMenuOpen = false;
  let isMobile = window.innerWidth < 768;

  onDestroy(() => window.removeEventListener("resize", handleResize));

  const toggleIsMenuOpen = () => {
    isMenuOpen = !isMenuOpen;
  };

  const handleResize = () => {
    isMobile = window.innerWidth < 768;
  };

  window.addEventListener("resize", handleResize);
</script>

<header class="header">
  {#if !isMobile}
    <Navigation {isMobile} />
  {/if}

  <div class="header-content">
    <img src={svelteLogo} class="logo" alt="Svelte Logo" />
    <h1>Hi, I'm John Doe <DarkToggle /></h1>
  </div>

  <div class="header-message">
    <h3>Check out the projects I've been working on</h3>
  </div>

  {#if isMobile}
    <BurgerButton onClick={toggleIsMenuOpen} />
  {/if}

  {#if isMenuOpen}
    <Modal {isMobile} onIsOpenToggle={toggleIsMenuOpen}>
      <Navigation {isMobile} />
    </Modal>
  {/if}
</header>
