import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
    state: () => {
        return {
            orderData: {},
        };
    },
    getters: {},
    actions: {
        //mutations

        //actions
        async sendOrder(data) {
            const api = useNuxtApp().$api;
            return api.post('/question_director', data).then((response) => {});
        },
        async sendQuestionFood(data) {
            const api = useNuxtApp().$api;
            return api.post('/question_food', data).then((response) => {});
        },
    },
});
