import { defineStore } from 'pinia';

export const useUsefulStore = defineStore('usefulLinksStore', {
  state: () => {
    return {
      links: [],
    };
  },
  getters: {
    getLinks(state) {
      return state.links;
    },
  },
  actions: {
    //mutations
    SET_LINKS(links) {
      this.links = links.data;
    },
    //actions
    async fetchLinks() {
      const api = useNuxtApp().$api;
      if (this.links.length) {
        return Promise.resolve();
      }
      return api.get(`/banner`).then((response) => {
        this.SET_LINKS(response.data);
      });
    },
  },
});