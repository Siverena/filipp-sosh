<template>
  <div class="fs-objects-slider">
    <div class="fs-objects-slider__images">
      <div v-for="(image, index) in arrCabinet.photos" :key="index">
        <div class="fs-objects-slider__images-item" v-if="index === currentSlide">
          <img :src="image" alt="{{image}}" />
        </div>
      </div>
    </div>
    <div class="fs-objects-slider__nav" :class="{ 'fs-objects-slider__nav--rev': inCabinet % 2 }"  v-if="slidesCount > 1">
      <div class="fs-objects-slider__count">{{ currentSlide + 1 }} / {{ slidesCount }}</div>
      <FsBtnSlidesPrev @click="prevSlide" :class="{ 'fs-objects-slider__btn--rev': inCabinet % 2 }" />
      <FsBtnSlidesNext @click="nextSlide" :class="{ 'fs-objects-slider__btn--rev': inCabinet % 2 }" />
    </div>
  </div>
</template>

<script>
import imageUrl from "@/utils/mixins/image-url.js";
export default {
  data() {
    return {
      currentSlide: 0,
    };
  },
  props: ["arrCabinet", "inCabinet"],
  mixins: [imageUrl],

  computed: {
    slidesCount() {
      return this.arrCabinet.photos.length;
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.arrCabinet.photos.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide += 1;
      }
    },
    prevSlide() {
      this.currentSlide -= 1;
      if (this.currentSlide < 0) {
        this.currentSlide = this.arrCabinet.photos.length - 1;
      }
    },
  },
};
</script>
