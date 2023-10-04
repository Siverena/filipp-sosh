import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {},
    };
  },
  getters: {
    getUser(state) {
      return state.questions;
    },
  },
  actions: {
    //mutations
    SET_USER(questions) {
      this.questions = questions.data;
    },
    //actions
    // async fetchQuestions() {
    //   const api = useNuxtApp().$api;
    //   if (this.questions.length) {
    //     return Promise.resolve();
    //   }
    //   return api.get(`/questions`).then((response) => {
    //     this.SET_QUESTIONS(response.data);
    //   });
    // },

    async auth(data) {
      const api = useNuxtApp().$api;
      return api.post('/login', data).then((response) => {
        this.SET_USER(response.data);
      });
    },
  },
});
