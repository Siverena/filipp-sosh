import news from '@/stores/data/d-news.js';
import { defineStore } from 'pinia';
async function API(id = null) {
  console.log('мы там где надо' + id)
  if (id) {
    // if (!news.data[id-1]) {
      // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
      // this.$root.error({ statusCode: 400, message: 'Error 400. Bad request' });
  // }
    return news.data[id-1];
    // return news[0].find((el) => el.id === id);
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
      console.log(id);
      API((id))
        .then((data) => {
          if (id) {
            this.SET_NEWS(data);
          } else this.SET_NEWS(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
