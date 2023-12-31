import { mapState, mapActions } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useGalleryStore } from '~/stores/galleryStore.js';
import { useModalStore } from '~/stores/modalStore.js';
export default {
  data() {
    return {
      loading: true,
      isShowSlider: false,
      informations: [],
      currentImage: 0,
      thumbnails: [],
    };
  },
  computed: {
    ...mapState(useAdaptiveStore, [
      'isMobileVersion',
      'isTabVersion',
      'isLaptopVersion',
      'widthComputed',
    ]),
    ...mapState(useModalStore, ['getIsShowSlider']),
    ...mapState(useGalleryStore, ['getGalleryAlbom']),
    body() {
      return document.querySelector('html');
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
    ...mapActions(useGalleryStore, ['fetchGalleryAlbom']),
    ...mapActions(useModalStore, ['openSlider']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchGalleryAlbom(this.$route.params.nameEng);
        this.loading = false;
      } catch (e) {
        showError({
          statusCode: 404, //e.response.status,
          message: 'Такой галереи не существует',
        });
      }
    },
    showSlider(key) {
      this.openSlider();
      this.currentImage = key;
      this.getThumbnails();
    },
    nextSlide() {
      if (this.currentImage === this.getGalleryAlbom.images.length - 1) {
        this.currentImage = 0;
      } else {
        ++this.currentImage;
      }
    },
    prevSlide() {
      if (this.currentImage === 0) {
        this.currentImage = this.getGalleryAlbom.images.length - 1;
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
      if (number > this.getGalleryAlbom.images.length - 1) {
        number = number - this.getGalleryAlbom.images.length;
      }
      if (number < 0) {
        number = this.getGalleryAlbom.images.length + number;
      }
      this.currentImage = number;
    },
    getThumbnails() {
      this.thumbnails = [];
      if (this.firstThumbnailsIndex < 0) {
        this.thumbnails = this.getGalleryAlbom.images.slice(
          this.firstThumbnailsIndex
        );
        this.thumbnails.push(
          ...this.getGalleryAlbom.images.slice(0, this.lastThumbnailsIndex + 1)
        );
      } else if (
        this.lastThumbnailsIndex >= this.getGalleryAlbom.images.length
      ) {
        this.thumbnails = this.getGalleryAlbom.images.slice(
          this.firstThumbnailsIndex
        );
        this.thumbnails.push(
          ...this.getGalleryAlbom.images.slice(
            0,
            this.lastThumbnailsIndex - (this.getGalleryAlbom.images.length - 1)
          )
        );
      } else {
        this.thumbnails = this.getGalleryAlbom.images.slice(
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
