<script>
  import Modal from "./Modal.svelte";

  function onClose() {
    console.log("Modal closed");
  }
</script>

<Modal {onClose}>
  <div>Test Content</div>
</Modal>
