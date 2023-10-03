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
      this.content = data.data[0];
    },
    //actions

    async fetchContent(path) {
      const api = useNuxtApp().$api;
      return api
        .get(`/chapter/${path}`)
        .then((response) => {
          this.SET_CONTENT(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
  },
});
