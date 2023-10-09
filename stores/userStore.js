import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            user: {},
            isAuthChecked: true,
            userData: {},
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
                this.fetchUserData(this.user.id);
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
        SET_USER_DATA(data) {
            this.userData = data;
        },
        //methods
        deleteUser() {
            this.DELETE_USER();
        },

        async logout() {
            const api = useNuxtApp().$api;
            return api
                .get('/logout', {
                    headers: {
                        Authorization: `Bearer${localStorage.getItem(
                            'Bearer'
                        )}`,
                    },
                })
                .then((response) => {});
        },

        async checkAuth() {
            const api = useNuxtApp().$api;
            this.SET_IS_AUTH_CHECKED(false);
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
                })
                .catch((e) => {
                    this.SET_IS_AUTH_CHECKED();
                    console.log(e);
                });
        },
        async fetchUserData(id) {
            const api = useNuxtApp().$api;
            if (Object.keys(this.userData).length) {
                return Promise.resolve();
            }
            return api.get(`/profile/${id}`).then((response) => {
                this.SET_USER_DATA(response.data);
            });
        },
    },
});
