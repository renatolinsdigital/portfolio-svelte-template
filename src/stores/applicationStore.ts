import { writable } from "svelte/store";

interface Application {
  isModalOpen: boolean;
}

export const application = writable<Application>({
  isModalOpen: false,
});
