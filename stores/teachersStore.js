import teachersData from '@/stores/data/d-teachers.js';
import { defineStore } from 'pinia';
async function API() {
  return teachersData;
}

export const useTeachersStore = defineStore('teachersStore', {
  state: () => {
    return {
      teachers: [],
    };
  },
  getters: {
    getNews(state) {
      return state.teachers;
    },
    isLoading() {
      return Promise.resolve(this.fetchTeachers);
    },
  },
  actions: {
    //mutations
    SET_TEACHERS(news) {
      this.news = news;
    },
    //actions
    async fetchTeachers() {
      API()
        .then((data) => {
          this.SET_TEACHERS(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
