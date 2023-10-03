import faqData from '@/stores/data/d-faq.js';
import { defineStore } from 'pinia';
async function API() {
  return faqData;
}

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
      this.questions = questions;
    },
    //actions
    async fetchQuestions() {
      const api = useNuxtApp().$api;
      if (Object.keys(this.questions).length) {
        return Promise.resolve();
      }
      return api.get(`/questions`).then((response) => {
        this.SET_QUESTIONS(response.data);
      });

    },
  },
});
