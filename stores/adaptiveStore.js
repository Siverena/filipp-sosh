import { defineStore } from 'pinia';

export const useAdaptiveStore = defineStore('adaptiveStore', {
  state: () => {
    return {
      windowWidth: 0,
      version: 'desktop',
    };
  },
  getters: {
    getVersion() {
      return this.version;
    },
    isMobileVersion() {
      return this.windowWidth < 768;
    },
    isTabVersion() {
      return this.windowWidth >= 768 && this.windowWidth < 1024;
    },
    isLaptopVersion() {
      return this.windowWidth >= 1024 && this.windowWidth < 1280;
    },
    isDesktopVersion() {
      return this.windowWidth >= 1280;
    },
    widthComputed() {
      return this.windowWidth > 0;
    },
  },
  actions: {
    //mutations
    CHANGE_WIDTH(width) {
      this.windowWidth = width;
    },
    CHANGE_VERSION() {
      if (this.windowWidth < 768) {
        this.version = 'mobile';
      }
      if (this.windowWidth >= 768 && this.windowWidth < 1024) {
        this.version = 'tablet';
      }
      if (this.windowWidth >= 1024 && this.windowWidth < 1280) {
        this.version = 'laptop';
      }
      if (this.windowWidth >= 1280) {
        this.version = 'desktop';
      }
    },
    //actions
    updateWidth() {
      this.CHANGE_WIDTH(document.documentElement.clientWidth);
      this.CHANGE_VERSION();
    },
  },
});
