import { defineStore } from 'pinia';

export const useFaqStore = defineStore('faqStore', {
  state: () => {
    return {
      questions: [],
    };
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
  },
  actions: {
    //mutations
    SET_QUESTIONS(questions) {
      this.questions = questions.data;
    },
    //actions
    async fetchQuestions() {
      const api = useNuxtApp().$api;
      if (this.questions.length) {
        return Promise.resolve();
      }
      return api.get(`/questions`).then((response) => {
        this.SET_QUESTIONS(response.data);
      });
    },
  },
});
