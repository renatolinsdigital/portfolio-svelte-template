<script lang="ts">
  import "./Header.scss";
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import svelteLogo from "../../../images/svelte.svg";
  import { deviceStore, modalStore } from "../../../stores/";
  import Navigation from "../Navigation/Navigation.svelte";
  import Text from "../../../shared/components/Text/Text.svelte";
  import Link from "../../../shared/components/Link/Link.svelte";
  import Modal from "../../../shared/components/Modal/Modal.svelte";
  import BurgerButton from "../../../shared/components/BurgerButton/BurgerButton.svelte";

  let isMobile = false;
  export let dataTestId = "header";

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

<header class="header-container" data-testid={dataTestId}>
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
    <BurgerButton
      ariaLabel="Toggle navigation menu"
      onClick={modalStore.onIsOpenToggle}
    />
  {/if}

  {#if isModalOpen}
    <Modal {isMobile} onIsOpenToggle={modalStore.onIsOpenToggle}>
      <Navigation />
    </Modal>
  {/if}
</header>
