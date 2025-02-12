<script lang="ts">
  import "./Header.scss";
  import Text from "../Text/Text.svelte";
  import Modal from "../Modal/Modal.svelte";
  import svelteLogo from "../../images/svelte.svg";
  import { device } from "../../stores/deviceStore";
  import DarkToggle from "../DarkToggle/DarkToggle.svelte";
  import Navigation from "../Navigation/Navigation.svelte";
  import BurgerButton from "../BurgerButton/BurgerButton.svelte";

  let isMenuOpen = false;
  $: isMobile = $device.isMobile;

  const toggleIsMenuOpen = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<header class="header">
  {#if !isMobile}
    <Navigation {isMobile} />
  {/if}

  <div class="header-content">
    <img src={svelteLogo} class="logo" alt="Svelte Logo" />
    <Text tag="h1" fontSizeName="biggest" margin={{ left: "1rem" }} isBold
      >Hi, I'm John Doe <DarkToggle />
    </Text>
  </div>

  <div class="header-message">
    <Text tag="h3" variation="low-contrast" fontSizeName="extraLarge"
      >Check out the projects I've been working on</Text
    >
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
