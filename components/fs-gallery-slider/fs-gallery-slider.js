import { mapActions } from 'pinia';
import { useModalStore } from '~/stores/modalStore.js';
export default {
    props: [
        'currentImage',
        'images',
        'nextSlide',
        'prevSlide',
        'setCurrentImage',
        'firstThumbnailsIndex',
        'thumbnails',
        'arrowHandler',
    ],
    methods: {
        ...mapActions(useModalStore, ['closeSlider']),
    },
    mounted() {
        window.addEventListener('keydown', this.arrowHandler);
    },
    unmounted() {
        window.removeEventListener('keydown', this.arrowHandler);
    },
};
