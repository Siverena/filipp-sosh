<template>
  <div class="fs-section-slider" v-if="widthComputed">
    <div class="fs-section-slider__img-wrap">
      <div class="fs-section-slider__img" v-for="(img, i) in images" :key="i">
        <a :href="img.documentSource" target="_blank">
          <img :src="img.documentSource" :alt="img.name"
        /></a>
      </div>
    </div>

    <div
      class="fs-section-slider__images-btn"
      :class="{
        'fs-section-slider__images-btn--visible':
          (isDesktopVersion && imagesCount > 5) ||
          (isLaptopVersion && imagesCount > 4) ||
          (isTabVersion && imagesCount > 3) ||
          (isMobileVersion && imagesCount > 2),
      }"
    >
      <div class="fs-index-gallery__count">
        {{ firstImg + 1 }} / {{ imagesCount }}
      </div>
      <FsBtnSlidesPrev @click="prevImg" />
      <FsBtnSlidesNext @click="nextImg" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
export default {
  props: ['images'],
  data() {
    return {
      firstImg: 0,
    };
  },
  computed: {
    ...mapState(useAdaptiveStore, [
      'widthComputed',
      'isDesktopVersion',
      'isLaptopVersion',
      'isTabVersion',
      'isMobileVersion',
    ]),
    imagesCount() {
      return this.images.length;
    },
    arrImages() {
      return this.images;
    },
  },
  methods: {
    ...mapActions(useAdaptiveStore, ['fetchGallery']),
    nextImg() {
      const tmp = this.arrImages[0];
      if (this.arrImages.length - 1 === this.firstImg) {
        this.arrImages.shift();
        this.arrImages.push(tmp);
        this.firstImg = 0;
      } else {
        this.arrImages.shift();
        this.arrImages.push(tmp);
        this.firstImg = this.firstImg + 1;
      }
    },
    prevImg() {
      const tmp = this.arrImages[this.arrImages.length - 1];
      if (this.firstImg === 0) {
        this.arrImages.splice(this.arrImages.length - 1);
        this.arrImages.unshift(tmp);
        this.firstImg = this.arrImages.length - 1;
      } else {
        this.arrImages.splice(this.arrImages.length - 1);
        this.arrImages.unshift(tmp);
        this.firstImg = this.firstImg - 1;
      }
    },
  },
};
</script>
