import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            user: {},
            isAuthChecked: false,
        };
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getIsAuthChecked() {
            return this.isAuthChecked;
        },
    },
    actions: {
        //mutations
        SET_USER(data) {
            this.user = data.data.user;
        },
        DELETE_USER() {
            this.user = {};
        },
        async auth(data) {
            const api = useNuxtApp().$api;
            return api.post('/login', data).then((response) => {
                this.SET_USER(response.data);
                localStorage.setItem(
                    response.data.data.token_type,
                    response.data.data.access_token
                );
                // localStorage.name = response.data.data.token_type;
                // localStorage.value = response.data.data.access_token;
            });
        },
        SET_IS_AUTH_CHECKED(checked = true) {
            this.isAuthChecked = checked;
        },
        //methods
        deleteUser() {
            this.DELETE_USER();
        },

        async logout() {
            const api = useNuxtApp().$api;
            return api
                .post('/logout', {
                    headers: {
                        Authorization: `Bearer${localStorage.getItem(
                            'Bearer'
                        )}`,
                    },
                })
                .then((response) => {
                    // this.SET_USER(response.data);
                    // localStorage.setItem(
                    //     response.data.data.token_type,
                    //     response.data.data.access_token
                    // );
                    // localStorage.name = response.data.data.token_type;
                    // localStorage.value = response.data.data.access_token;
                });
        },

        async checkAuth() {
            const api = useNuxtApp().$api;
            return api
                .get('/user', {
                    headers: {
                        Authorization: `Bearer${localStorage.getItem(
                            'Bearer'
                        )}`,
                    },
                })
                .then((response) => {
                    this.SET_USER(response.data);
                    this.SET_IS_AUTH_CHECKED(true);
                    // localStorage.setItem(
                    //     response.data.data.token_type,
                    //     response.data.data.access_token
                    // );
                    // localStorage.name = response.data.data.token_type;
                    // localStorage.value = response.data.data.access_token;
                });
        },
    },
});
