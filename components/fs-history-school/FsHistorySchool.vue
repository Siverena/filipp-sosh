<template>
  <section class="fs-history-school">
    <FsSectionTitles>
      <template v-slot:h1> История школы </template>
    </FsSectionTitles>
    <div class="fs-history-school__container">
      <template v-for="(slide, key) in slides" :key="key">
        <div class="fs-history-school__item" v-if="key === currentSlide">
          <div class="fs-history-school__item-title fs-h2">
            {{ slide.title }}
          </div>
          <div
            class="fs-history-school__item-content"
            v-html="slide.text"
          ></div>
        </div>
      </template>
      <div class="fs-history-school__btns">
        <FsBtnSlidesPrev @click="prevSlide" />
        <FsBtnSlidesNext @click="nextSlide" />
      </div>
    </div>
  </section>
</template>
<script src="./fs-history-school.js"></script>
