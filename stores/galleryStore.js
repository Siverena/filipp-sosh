import { defineStore } from 'pinia';

export const useGalleryStore = defineStore('GalleryStore', {
    state: () => {
        return {
            gallery: [],
            galleryAlbom: {},
        };
    },
    getters: {
        getGallery(state) {
            return state.gallery;
        },
        getGalleryAlbom(state) {
            return state.galleryAlbom;
        },
        getGalleryLoading(state) {
            return Promise.all([this.fetchGallery, this.fetchGalleryAlbom]);
        },
        getGalleryAlbomName(state) {
            return state.galleryAlbom.name;
        },
    },
    actions: {
        //mutations
        SET_GALLERY(gl) {
            this.gallery = gl.data;
        },
        SET_GALLERY_ALBOM(gl) {
            this.galleryAlbom = gl.data[0];
        },
        //actions
        async fetchGallery() {
            const api = useNuxtApp().$api;
            if (this.gallery.length) {
                return Promise.resolve();
            }
            return api.get(`/albums/`).then((response) => {
                this.SET_GALLERY(response.data);
            });
        },
        async fetchGalleryAlbom(nameEng) {
            const api = useNuxtApp().$api;
            if (this.galleryAlbom.nameEng === nameEng) {
                console.log('тот же альбом');
                return Promise.resolve();
            }
            return api.get(`/albums/${nameEng}`).then((response) => {
                this.SET_GALLERY_ALBOM(response.data);
            });
        },
        clearGalleryAlbom() {
            this.SET_GALLERY_ALBOM({ data: [{}] });
        },
    },
});
