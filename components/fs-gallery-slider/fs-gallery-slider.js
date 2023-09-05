import imageUrl from '@/utils/mixins/image-url.js';
export default {
  props: [
    'currentImage',
    'images',
    'closeSlider',
    'nextSlide',
    'prevSlide',
    'setCurrentImage',
    'firstThumbnailsIndex',
    'thumbnails',
  ],
  mixins: [imageUrl],
};
