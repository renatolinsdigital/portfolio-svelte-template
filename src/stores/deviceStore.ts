import { writable } from "svelte/store";

interface Device {
  isMobile: boolean;
  screenWidth: number;
}

const initialDeviceState: Device = {
  isMobile: window.innerWidth < 768,
  screenWidth: window.innerWidth,
};

export const deviceStore = writable<Device>(initialDeviceState);

const updateDevice = (): void => {
  const isMobile = window.innerWidth < 768;
  const screenWidth = window.innerWidth;

  deviceStore.set({ isMobile, screenWidth });
};

updateDevice();
window.addEventListener("resize", updateDevice);
