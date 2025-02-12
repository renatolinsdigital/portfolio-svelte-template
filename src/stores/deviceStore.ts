import { writable } from "svelte/store";

interface Device {
  isMobile: boolean;
  screenWidth: number;
}

export const device = writable<Device>({
  isMobile: window.innerWidth < 768,
  screenWidth: window.innerWidth,
});

const updateDevice = (): void => {
  device.update((current) => ({
    ...current,
    isMobile: window.innerWidth < 768,
    screenWidth: window.innerWidth,
  }));
};

updateDevice();
window.addEventListener("resize", updateDevice);
