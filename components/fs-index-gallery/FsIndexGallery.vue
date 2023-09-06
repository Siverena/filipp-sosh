<template>
  <section class="fs-index-gallery" v-if="!loading">
    <div class="container">
      <FsSectionTitles class="fs-index-gallery__title">
        <template v-slot:h1>Галерея</template>
        <template v-slot:dop>Жизнь нашей школы в фотографиях </template>
      </FsSectionTitles>

      <div class="fs-index-gallery__reasons-cont">
        <div class="fs-index-gallery__reasons">
          <div
            v-for="(reason, key) in reasons"
            :key="key"
            class="fs-index-gallery__reason"
          >
            <img :src="getStaticImageUrl(reason.mainImg)" alt="" />
          </div>
        </div>
        <div class="fs-index-gallery__nav">
          <FsBtnSlidesPrev @click="prevReason" />
          <FsBtnSlidesNext @click="nextReason" />
          <div class="fs-index-gallery__count">
            {{ activeReason + 1 }} / {{ reasonsCount }}
          </div>
        </div>
      </div>
      <NuxtLink
        class="Fs-btn Fs-btn--Fseen fs-index-gallery__link fs-index-gallery__link--mobile"
        to="/services"
        >Посмотреть все услуги</NuxtLink
      >
    </div>
  </section>
</template>
<script src="./fs-index-gallery.js"></script>
