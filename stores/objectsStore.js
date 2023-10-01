import { defineStore } from 'pinia';

export const useObjectsStore = defineStore('ObjectsStore', {
  state: () => {
    return {
      objects: [],
    };
  },
  getters: {
    getObjects(state) {
      return state.objects;
    },
  },
  actions: {
    //mutations
    SET_OBJECTS(objects) {
      this.objects = objects.data;
    },
    async fetchObjects() {
      const api = useNuxtApp().$api;
      if (this.objects.length) {
        return Promise.resolve();
      }
      return api
      .get(`/cabinets/`)
        .then((response) => {
          this.SET_OBJECTS(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
  },
});