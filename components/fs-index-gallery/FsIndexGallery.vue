<template>
  <section class="fs-index-gallery" v-if="!loading">
    <div class="fs-index-gallery__content">
      <FsSectionTitles class="fs-index-gallery__title">
        <template v-slot:main>Галерея</template>
      </FsSectionTitles>
      <div class="fs-index-gallery__layout">
        <div class="fs-index-gallery__info">
          <p class="fs-h2">Жизнь нашей школы в фотографиях</p>

          <NuxtLink
            class="fs-link fs-link--base fs-index-gallery__link"
            to="/gallery"
            >Посмотреть все альбомы</NuxtLink
          >
        </div>
        <div class="fs-index-gallery__reasons-cont">
          <div class="fs-index-gallery__reasons">
            <div
              class="fs-index-gallery__reason"
              v-for="(reason, key) in reasons"
              :key="key"
            >
              <nuxt-link :to="`/gallery/${reason.nameEng}`">
                <img :src="reason.mainImg" alt="" />
                <div class="fs-index-gallery__reason-text">
                  {{ reason.name }}
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="fs-index-gallery__nav">
            <FsBtnSlidesPrev @click="prevReason" />
            <FsBtnSlidesNext @click="nextReason" />
            <div class="fs-index-gallery__count">
              {{ activeReason + 1 }} / {{ reasonsCount }}
            </div>
          </div>
          <NuxtLink
            class="fs-link fs-link--base fs-index-gallery__link fs-index-gallery__link--mobile"
            to="/gallery"
            >Посмотреть все фото</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./fs-index-gallery.js"></script>
