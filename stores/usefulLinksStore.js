import { defineStore } from 'pinia';

export const useUsefulLinksStore = defineStore('usefulLinksStore', {
    state: () => {
        return {
            links: [],
            linkSlug: '',
        };
    },
    getters: {
        getLinks(state) {
            return state.links;
        },
    },
    actions: {
        //mutations
        SET_LINKS(links) {
            this.links = links.data;
        },
        SET_LINK_SLUG(slug) {
            this.linkSlug = slug;
        },
        //actions
        async fetchLinks() {
            const api = useNuxtApp().$api;
            if (this.links.length) {
                return Promise.resolve();
            }
            return api.get(`/banner`).then((response) => {
                this.SET_LINKS(response.data);
            });
        },
        setLinkSlug(slug) {
            this.SET_LINK_SLUG(slug);
        },
        clearLinkSlug() {
            this.SET_LINK_SLUG('');
        },
    },
});
