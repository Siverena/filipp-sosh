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
      this.teachers = teachers;
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
