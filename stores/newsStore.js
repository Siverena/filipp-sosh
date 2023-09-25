// import news from '@/stores/data/d-news.js';
// import { defineStore } from 'pinia';
// async function API(id = null) {
//   if (id) {
//     return news.data.find((el) => el.id === id);
//   } else {
//     return news.data;
//   }
// }

// export const useNewsStore = defineStore('NewsStore', {
//   state: () => {
//     return {
//       news: [],
//     };
//   },
//   getters: {
//     getNews(state) {
//       return state.news;
//     },
//     isLoading() {
//       return Promise.resolve(this.fetchNews);
//     },
//   },
//   actions: {
//     //mutations
//     SET_NEWS(news) {
//       this.news = news;
//     },
//     //actions
//     async fetchNews(id = null) {
//       return API(id)
//         .then((data) => {
//           this.SET_NEWS(data);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     },
//   },
// });

import { defineStore } from 'pinia';

export const useNewsStore = defineStore('NewsStore', {
  state: () => {
    return {
      news: [],
      isLoading: true,
    };
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  actions: {
    SET_NEWS(data) {
      this.news = data.data;
    },
    async fetchNews(newsId = '') {
      const api = useNuxtApp().$api;
      if (this.news.length) {
        return Promise.resolve();
      }
      console.log(this.news)
      return api
        .get(`/news/${newsId}`)
        .then((response) => {
          this.SET_NEWS(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
  }

})