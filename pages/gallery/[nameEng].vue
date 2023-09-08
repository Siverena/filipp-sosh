<template>
  <section class="fs-gallery" v-if="!loading && widthComputed">
    <Head>
      <Title>{{ getGallery.name }} | Громово парк</Title>
    </Head>
    <div class="container no-tab">
      <div class="fs-gallery__content">
        <FsSectionTitles>
          <template v-slot:h1> {{ getGallery.name }} </template>
        </FsSectionTitles>
        <div class="fs-gallery__list">
          <img
            alt=""
            v-for="(img, key) in imgsss"
            :key="key"
            class="fs-gallery__image"
            :src="getStaticImageUrl(img.src)"
            @click="showSlider(key)"
          />
        </div>
      </div>
    </div>
    <FsGallerySlider
      v-if="isShowSlider"
      :currentImage="currentImage"
      :images="images"
      :closeSlider="closeSlider"
      :nextSlide="nextSlide"
      :prevSlide="prevSlide"
      :setCurrentImage="setCurrentImage"
      :firstThumbnailsIndex="firstThumbnailsIndex"
      :thumbnails="thumbnails"
    />
  </section>
</template>
<script src="./name-eng.js"></script>
