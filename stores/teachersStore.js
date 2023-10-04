import { defineStore } from 'pinia';

export const useTeachersStore = defineStore('teachersStore', {
  state: () => {
    return {
      teachers: [],
    };
  },
  getters: {
    getTeachers(state) {
      // return state.teachers;
      return state.teachers.filter((link) => !link.isAdministration);
    },
    getTeachersAdmin(state) {
      return state.teachers.filter((link) => link.isAdministration);
    },
    isLoading() {
      return Promise.resolve(this.fetchTeachers);
    },
  },
  actions: {
    //mutations
    SET_TEACHERS(teachers) {
      this.teachers = teachers.data;
    },
    //actions
    async fetchTeachers() {
      const api = useNuxtApp().$api;
      if (this.teachers.length) {
        return Promise.resolve();
      }
      return api
      .get(`/teachers/`)
        .then((response) => {
          this.SET_TEACHERS(response.data);
        })
        .catch((e) =>  {
          console.log(e);
        });
    },
  },
});
