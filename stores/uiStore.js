import { defineStore, acceptHMRUpdate } from 'pinia';

export const useUiStore = defineStore('uiStore', {
    state: () => {
        return {
            pageLoader: false,
        };
    },
    getters: {
        getPageLoader(state) {
            return state.pageLoader;
        },
    },
    actions: {
        setPageLoader(value) {
            this.pageLoader = value;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
