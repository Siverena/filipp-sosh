import { mapState } from 'pinia';
import { useNavLinksStore } from '@/stores/navLinksStore.js';
import date from '@/utils/mixins/date';
export default {
    data() {
        return {
            currentMenu: false,
        };
    },
    mixins: [date],
    computed: {
        ...mapState(useNavLinksStore, ['getMenuNavLinks']),
    },
    methods: {
        toggleMenu(key) {
            if (this.currentMenu === false || this.currentMenu !== key) {
                this.currentMenu = key;
            } else {
                this.currentMenu = false;
            }
        },
    },
};
