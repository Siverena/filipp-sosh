import news from '@/stores/data/d-news.js';
import { defineStore } from 'pinia';
async function API(id = null) {
  if (id) {
    return news.find((el) => el.id === id);
  } else {
    return news;
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
      API((id = null))
        .then((data) => {
          this.SET_NEWS(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
