import { defineStore } from 'pinia';

export const useQuestionsStore = defineStore('questionsStore', {
  state: () => {
    return {
      questions: [],
      counter: 0,
      status: 0,
      appealCategory: null,
      email: "",
    };
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
    getCounter(state) {
      return state.counter;
    },
    getStatus(state) {
      return state.status;
    },
    getAppealCategory(state) {
      return state.appealCategory;
    },
    getEmail(state) {
      return state.email.length;
    },
    path() {
      let tmp = "?";
      if (this.status === null && this.appealCategory === null && this.email.length === 0) {
        tmp = "/";
      } else {
        if (this.status !== null) {
          tmp += "status=" + this.status;
        }
        if (this.appealCategory !== null) {
          if (tmp.slice(-1) !== "?") tmp += "&";
          tmp += "appealCategory=" + this.appealCategory;
        }
        if (this.email.length !== 0) {
          if (tmp.slice(-1) !== "?") tmp += "&";
          tmp += "email=" + this.email;
        }
      }
      return tmp;
    },
  },
  actions: {
    //mutations
    SET_QUESTIONS(questions) {
      this.questions = questions.data;
    },
    SET_COUNTER(questions) {
      this.counter = this.questions.length;
    },
    SET_STATUS(status) {
      this.status = status;
    },
    SET_APPEAL_CATEGORY(appealCategory) {
      this.appealCategory = appealCategory;
    },
    SET_EMAIL(email) {
      this.email = email;
    },
    //actions
    setStatus(status) {
      this.SET_STATUS(status);
    },
    setAppealCategory(appealCategory) {
      this.SET_APPEAL_CATEGORY(appealCategory);
    },
    setEmail(email) {
      this.SET_EMAIL(email);
    },

    async sendAnswer(data) {
      const api = useNuxtApp().$api;
      return api.post('/answer_question', data);
    },
    async fetchQuestions(path = '') {
      const api = useNuxtApp().$api;
      return api.get(`/appeals${path}`).then((response) => {
        this.SET_QUESTIONS(response.data);
        this.SET_COUNTER(this.questions);
      });
    },
  },
});