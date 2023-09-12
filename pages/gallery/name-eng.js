import { mapState, mapActions } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useGalleryStore } from '~/stores/galleryStore.js';
import { useModalStore } from '~/stores/modalStore.js';
import imageUrl from '@/utils/mixins/image-url.js';
export default {
  data() {
    return {
      loading: true,
      isShowSlider: false,
      informations: [],
      currentImage: 0,
      images: [],
      thumbnails: [],
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useAdaptiveStore, [
      'isMobileVersion',
      'isTabVersion',
      'isLaptopVersion',
      'widthComputed',
    ]),
    ...mapState(useModalStore, ['getIsShowSlider']),
    ...mapState(useGalleryStore, ['getGallery']),
    body() {
      return document.querySelector('html');
    },

    imgsss() {
      const tmp = [];
      this.images.forEach((element, index) => {
        const objTmp = {};
        objTmp.id = index;
        objTmp.src = element;
        tmp.push(objTmp);
      });
      return tmp;
    },
    imagesCount() {
      if (this.isTabVersion || this.isLaptopVersion || this.isMobileVersion) {
        return 4;
      }
      return 5; //desktop
    },
    firstThumbnailsIndex() {
      return this.currentImage - Math.floor((this.imagesCount - 1) / 2);
    },
    lastThumbnailsIndex() {
      return this.currentImage + Math.ceil((this.imagesCount - 1) / 2);
    },
  },
  watch: {
    currentImage() {
      this.getThumbnails();
    },
    imagesCount() {
      this.getThumbnails();
    },
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),
    ...mapActions(useModalStore, ['openSlider']),
    async loadData() {
      this.loading = true;
      await this.fetchGallery(this.$route.params.nameEng);
      this.images = this.getGallery.images;
      this.loading = false;
    },
    showSlider(key) {
      this.openSlider();
      this.currentImage = key;
      this.getThumbnails();
    },
    nextSlide() {
      if (this.currentImage === this.images.length - 1) {
        this.currentImage = 0;
      } else {
        ++this.currentImage;
      }
    },
    prevSlide() {
      if (this.currentImage === 0) {
        this.currentImage = this.images.length - 1;
      } else {
        --this.currentImage;
      }
    },
    arrowHandler(e) {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
      }
      if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
    },
    setCurrentImage(number) {
      if (number > this.images.length - 1) {
        number = number - this.images.length;
      }
      if (number < 0) {
        number = this.images.length + number;
      }
      this.currentImage = number;
    },
    getThumbnails() {
      this.thumbnails = [];
      if (this.firstThumbnailsIndex < 0) {
        this.thumbnails = this.images.slice(this.firstThumbnailsIndex);
        this.thumbnails.push(
          ...this.images.slice(0, this.lastThumbnailsIndex + 1)
        );
      } else if (this.lastThumbnailsIndex >= this.images.length) {
        this.thumbnails = this.images.slice(this.firstThumbnailsIndex);
        this.thumbnails.push(
          ...this.images.slice(
            0,
            this.lastThumbnailsIndex - (this.images.length - 1)
          )
        );
      } else {
        this.thumbnails = this.images.slice(
          this.firstThumbnailsIndex,
          this.lastThumbnailsIndex + 1
        );
      }
    },
  },
  async created() {
    await this.loadData();
  },
};
