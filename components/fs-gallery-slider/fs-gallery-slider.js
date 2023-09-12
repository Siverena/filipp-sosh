import { mapActions } from 'pinia';
import imageUrl from '@/utils/mixins/image-url.js';
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
  mixins: [imageUrl],
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
