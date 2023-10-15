import { defineStore } from 'pinia';
export const usePagesStore = defineStore('pagesStore', {
    state: () => {
        return {
            content: [],
        };
    },
    getters: {
        getContent(state) {
            return state.content;
        },
        getTitle(state) {
            return state.content?.chapterTitle ?? '';
        },
    },
    actions: {
        //mutations
        SET_CONTENT(data) {
            this.content = data.data[0];
        },

        //actions
        async fetchContent(path) {
            const api = useNuxtApp().$api;
            return api
                .get(`/chapter/${path}`)
                .then((response) => {
                    this.SET_CONTENT(response.data);
                })
                .catch(function (e) {
                    console.log(e);
                });
        },
    },
});
