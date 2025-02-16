import { writable } from "svelte/store";

interface Modal {
  isOpen: boolean;
}

const { subscribe, set, update } = writable<Modal>({
  isOpen: false,
});

const onIsOpenToggle = () => {
  update((current) => ({ isOpen: !current.isOpen }));
};

const onClose = () => {
  set({ isOpen: false });
};

export const modalStore = {
  set,
  update,
  onClose,
  subscribe,
  onIsOpenToggle,
};
