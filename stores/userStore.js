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
        getUserData(state) {
            return state.userData;
        },
        getStudentInfo(state) {
            let info = state.userData.data?.info.find(
                (el) => el.role === 'Студент'
            );
            return info;
        },
        getParentInfo(state) {
            let info = state.userData.data?.info.find(
                (el) => el.role === 'Родитель'
            );
            return info;
        },
        getTeacherInfo(state) {
            let info = state.userData.data?.info.find(
                (el) => el.role === 'Учитель'
            );
            return info;
        },
        isAuthenticated(state) {
            return state.getUser && Object.keys(state.getUser).length;
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

        async auth(data) {
            const api = useNuxtApp().$api;
            return api.post('/login', data).then((response) => {
                this.SET_USER(response.data);
                this.fetchUserData(response.data.data.user.id);
                localStorage.setItem(
                    response.data.data.token_type,
                    response.data.data.access_token
                );
            });
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
            this.SET_IS_AUTH_CHECKED(false);
            this.fetchUser()
                .then((response) => {
                    this.fetchUserData(this.user.id);
                    // this.fetchUserData(response.data.data.user.id);
                    this.SET_IS_AUTH_CHECKED(true);
                })
                .catch((e) => {
                    this.SET_IS_AUTH_CHECKED();
                    console.log(e);
                });
        },
        async fetchUser() {
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
                });
        },
        async fetchUserData(id) {
            const api = useNuxtApp().$api;
            return api.get(`/profile?id=${id}`).then((response) => {
                this.SET_USER_DATA(response.data);
            });
        },
        async changePhoto(data) {
            const api = useNuxtApp().$api;
            return api
                .post(`/avatar-update?id=${this.getUser.id}`, data)
                .then((response) => {
                    this.fetchUser().catch((e) => {
                        console.log(e);
                    });
                });
        },
    },
});
