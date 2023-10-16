import { mapState } from 'pinia';
import { useNavLinksStore } from '@/stores/navLinksStore.js';
import currentUrl from '@/utils/mixins/current-url';
export default {
    props: ['isFooter'],
    data() {
        return {
            currentMenu: null,
        };
    },
    mixins: [currentUrl],
    computed: {
        ...mapState(useNavLinksStore, ['getMenuNavLinks']),
    },
    watch: {
        currentUrl() {
            this.toggleMenu();
        },
    },
    methods: {
        toggleMenu(key = null) {
            if (this.currentMenu !== key) {
                this.currentMenu = key;
                document
                    .querySelector('body')
                    .addEventListener('click', this.closeMenu);
            } else {
                this.currentMenu = null;
            }
        },
        closeMenu() {
            this.currentMenu = null;
            document
                .querySelector('body')
                .removeEventListener('click', this.closeMenu);
        },
        getClassByRoute(string) {
            if (this.$route.name === 'index' || !this.$route.name) {
                return string + '--index';
            }
        },
        getClassByCurrentMenu(key) {
            if (this.currentMenu === key) {
                return 'gr-nav__arrow--open';
            }
        },
    },
    beforeRouteUpdate(to, from, next) {
        this.toggleMenu();
    },
};
