<template>
  <section class="fs-index-gallery" v-if="!loading">
    <div class="container">
      <div class="fs-index-gallery__content">
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
          class="fs-link fs-link--green fs-index-gallery__link"
          to="/gallery"
          >Посмотреть все фото</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script src="./fs-index-gallery.js"></script>
