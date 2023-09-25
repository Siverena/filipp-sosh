<template>
  <section class="fs-gallery">
    <div class="container no-tab">
      <div class="fs-gallery__loader" v-if="loading">
        <div class="fs-gallery__loader-item" v-for="key in 3">
          <div class="fs-gallery__loader-info">
            <div
              class="fs-gallery__loader-string fs-gallery__loader-string"
            ></div>
            <div
              class="fs-gallery__loader-string fs-gallery__loader-string--2"
            ></div>
          </div>
        </div>
      </div>
      <div class="fs-gallery__content" v-if="!loading && widthComputed">
        <Head>
          <Title>{{ getGalleryAlbom.name }} | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
        </Head>
        <FsSectionTitles>
          <template v-slot:main> {{ getGalleryAlbom.name }} </template>
        </FsSectionTitles>
        <div class="fs-gallery__list">
          <img
            alt=""
            v-for="(img, key) in getGalleryAlbom.images"
            :key="key"
            class="fs-gallery__image"
            :src="img"
            @click="showSlider(key)"
            tabindex="0"
            @keypress.enter="showSlider(key)"
          />
        </div>
      </div>
    </div>
    <FsGallerySlider
      v-if="getIsShowSlider"
      :currentImage="currentImage"
      :images="getGalleryAlbom.images"
      :nextSlide="nextSlide"
      :prevSlide="prevSlide"
      :setCurrentImage="setCurrentImage"
      :firstThumbnailsIndex="firstThumbnailsIndex"
      :thumbnails="thumbnails"
      :arrowHandler="arrowHandler"
    />
  </section>
</template>
<script src="./name-eng.js"></script>
