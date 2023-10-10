import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    computed: {
        ...mapState(useUserStore, ['getUser']),
    },
    methods: {
        ...mapActions(useUserStore, ['deleteUser', 'logout']),
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        exit() {
            this.logout();
            localStorage.removeItem('Bearer');
            this.deleteUser();
            this.$router.push('/login');
        },
    },
};
