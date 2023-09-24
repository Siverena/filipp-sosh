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
      return API()
        .then((data) => {
          this.SET_QUESTIONS(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
