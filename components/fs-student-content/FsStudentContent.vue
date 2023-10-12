<template>
    <div></div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useUserStore, ['getUser', 'getDataLoading', 'getUserData']),
    },
    watch: {
        getUserData() {
            this.loading = false;
        },
    },
    methods: {
        ...mapActions(useUserStore, [
            'fetchUserData',
            'auth',
            'logout',
            'checkAuth',
        ]),
    },
};
</script>
