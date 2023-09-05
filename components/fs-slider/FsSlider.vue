<template>
  <div class="fs-slider">
    <div class="fs-slider__slide">
      <img
        :src="getStaticImageUrl(slides[currentActive])"
        class="fs-slider__image"
        alt=""
      />
    </div>
    <div class="fs-slider__nav" :class="right ? 'fs-slider__nav--right ' : ''">
      <fsBtnSlidesPrev @click="prevSlide" />
      <fsBtnSlidesNext @click="nextSlide" />
      <div class="fs-slider__count">
        {{ currentActive + 1 }}/ {{ slideCount }}
      </div>
    </div>
  </div>
</template>
<script src="./fs-slider.js"></script>
