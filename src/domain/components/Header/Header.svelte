<script lang="ts">
  import "./Header.scss";
  import { fade } from "svelte/transition";
  import svelteLogo from "../../../images/svelte.svg";
  import { deviceStore, modalStore } from "../../../stores/";
  import DarkToggle from "../DarkToggle/DarkToggle.svelte";
  import Navigation from "../Navigation/Navigation.svelte";
  import Text from "../../../shared/components/Text/Text.svelte";
  import Link from "../../../shared/components/Link/Link.svelte";
  import Modal from "../../../shared/components/Modal/Modal.svelte";
  import BurgerButton from "../../../shared/components/BurgerButton/BurgerButton.svelte";
  import { onDestroy } from "svelte";

  let isMobile = false;
  const deviceUnsubscribe = deviceStore.subscribe((value) => {
    isMobile = value.isMobile;
  });

  let isModalOpen = false;
  const modalUnsubscribe = modalStore.subscribe((value) => {
    isModalOpen = value.isOpen;
  });

  onDestroy(() => {
    deviceUnsubscribe();
    modalUnsubscribe();
  });
</script>

<header class="header-container">
  {#if !isMobile}
    <Navigation />
  {/if}

  <div class="header-content" transition:fade={{ duration: 300 }}>
    <Link href="#"
      ><img
        alt="Logo"
        class="logo"
        src={svelteLogo}
        class:mobile={isMobile}
      /></Link
    >
    <Text tag="h1" fontSizeName="jumbo" margin="0 0 0 1rem" isBold
      >Hi, I'm John Doe
      <!-- <DarkToggle /> -->
    </Text>
  </div>

  <div class="header-message" transition:fade={{ duration: 2000 }}>
    <Text tag="h3" fontSizeName="large" colorVariant="low-contrast"
      >Check out the projects I've been working on</Text
    >
  </div>

  {#if isMobile}
    <BurgerButton onClick={modalStore.onIsOpenToggle} />
  {/if}

  {#if isModalOpen}
    <Modal {isMobile} onIsOpenToggle={modalStore.onIsOpenToggle}>
      <Navigation />
    </Modal>
  {/if}
</header>
