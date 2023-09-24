import pagesData from '@/stores/data/d-pages.js';
import { defineStore } from 'pinia';
async function API(path) {
  return pagesData.data.find((el) => el.link === path);
}

export const usePagesStore = defineStore('pagesStore', {
  state: () => {
    return {
      content: [],
    };
  },
  getters: {
    getContent(state) {
      return state.content;
    },
  },
  actions: {
    //mutations
    SET_CONTENT(data) {
      this.content = data;
    },
    //actions
    async fetchContent(path) {
      API(path)
        .then((data) => {
          this.SET_CONTENT(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
