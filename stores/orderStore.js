import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
  state: () => {
    return {
      orderData: {},
    };
  },
  getters: {
    // getTeachers(state) {
    //   return state.teachers.filter((link) => !link.isAdministration);
    // },
  },
  actions: {
    //mutations
    // SET_TEACHERS(teachers) {
    //   this.teachers = teachers;
    // },
    //actions
    async sendOrder(data) {
      const api = useNuxtApp().$api;
      return api.post('/question_director', data).then((response) => {
        console.log(response);
      });
    },
  },
});
