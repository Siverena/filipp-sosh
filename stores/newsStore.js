import { defineStore } from 'pinia';

export const useNewsStore = defineStore('NewsStore', {
  state: () => {
    return {
      news: {},
      lastNews: [],
      newsList: [],
    };
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getLastNews(state) {
      return state.lastNews;
    },
    getNewsList(state) {
      return state.newsList;
    },
  },
  actions: {
    //mutations
    SET_NEWS(data) {
      this.news = data.data;
    },
    SET_LAST_NEWS(data) {
      this.lastNews = data.data;
    },
    SET_NEWS_LIST(data) {
      this.newsList = data.data;
    },
    //actions
    async fetchNews(newsId = '') {
      const api = useNuxtApp().$api;
      if (Object.keys(this.news).length) {
        return Promise.resolve();
      }
      return api.get(`/news/${newsId}`).then((response) => {
        this.SET_NEWS(response.data);
      });
    },
    async fetchLastNews() {
      const api = useNuxtApp().$api;
      if (this.lastNews.length) {
        return Promise.resolve();
      }
      return api.get(`/news/?limit=3`).then((response) => {
        this.SET_LAST_NEWS(response.data);
      });
    },
    async fetchNewsList() {
      const api = useNuxtApp().$api;
      if (this.newsList.length) {
        return Promise.resolve();
      }
      return api.get(`/news/`).then((response) => {
        this.SET_NEWS_LIST(response.data);
      });
    },
  },
});
