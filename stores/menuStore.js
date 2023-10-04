import menuData from '@/stores/data/d-menu.js';
import { defineStore } from 'pinia';
async function API() {
  return menuData;
}

export const useMenuStore = defineStore('menuStore', {
  state: () => {
    return {
      menu: [],
    };
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
  },
  actions: {
    //mutations
    SET_MENU(menu) {
      this.menu = menu.data;
    },
    //actions

    async fetchMenu() {
      const api = useNuxtApp().$api;
      if (this.menu.length) {
        return Promise.resolve();
      }
      return api
        .get(`/menu/`)
        .then((response) => {
          this.SET_MENU(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
  },
});
