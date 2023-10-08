import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        ...mapActions(useUserStore, ['deleteUser']),
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        exit() {
            localStorage.removeItem('Bearer');
            // localStorage.clear();
            this.deleteUser();
            this.$router.push('/login');
        },
    },
};
