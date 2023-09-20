import news from '@/stores/data/d-news.js';
import { defineStore } from 'pinia';
async function API(id = null) {
  if (id) {
    return news.data.find((el) => el.id === id);
  } else {
    return news.data;
  }
}

export const useNewsStore = defineStore('NewsStore', {
  state: () => {
    return {
      news: [],
    };
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    isLoading() {
      return Promise.resolve(this.fetchNews);
    },
  },
  actions: {
    //mutations
    SET_NEWS(news) {
      this.news = news;
    },
    //actions
    async fetchNews(id = null) {
      return API(id)
        .then((data) => {
          this.SET_NEWS(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
