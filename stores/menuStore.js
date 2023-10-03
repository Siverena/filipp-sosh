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
      this.menu = menu;
    },
    //actions
    async fetchMenu() {
        return API()
          .then((data) => {
            this.SET_MENU(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
  },
});