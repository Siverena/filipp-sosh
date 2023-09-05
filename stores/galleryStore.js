import gall from '@/stores/data/d-gallery.js';
import { defineStore } from 'pinia';
async function API(nameEng = null) {
  if (nameEng) {
    return gall.find((el) => el.nameEng === nameEng);
  } else {
    return gall;
  }
}

export const useGalleryStore = defineStore('GalleryStore', {
  state: () => {
    return {
      gallery: [],
    };
  },
  getters: {
    getGallery(state) {
      return state.gallery;
    },
    isLoading() {
      return Promise.resolve(this.fetchGallery);
    },
  },
  actions: {
    //mutations
    SET_GALLERY(gl) {
      this.gallery = gl;
    },
    //actions
    async fetchGallery(nameEng = null) {
      API(nameEng)
        .then((data) => {
          this.SET_GALLERY(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
