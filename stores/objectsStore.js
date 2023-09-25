import objects from '@/stores/data/d-objects.js';
import { defineStore } from 'pinia';

async function API(id = null) {
  if (id) {
    return objects.find((el) => el.id === id);
  } else {
    return objects;
  }
}

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
      this.objects = objects;
    },
    //actions
    async fetchObjects(id = null) {
      return API(id)
        .then((data) => {
          this.SET_OBJECTS(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});