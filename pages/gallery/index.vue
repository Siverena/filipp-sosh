<template>
  <Head>
    <Title>Галерея | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
  </Head>
  <section class="fs-gallery" v-if="false">
    <div class="container no-tab" v-if="!loading">
      <FsSectionTitles>
        <template v-slot:h1> Галерея </template>
      </FsSectionTitles>
      <div class="fs-gallery__list">
        <NuxtLink
          v-for="(item, key) in getGallery"
          :key="key"
          :to="`/gallery/${item?.nameEng}`"
          class="fs-gallery__item"
          :style="
            `background-image: url(` + getStaticImageUrl(item.mainImg) + `);`
          "
        >
          <div class="fs-gallery__item-bg">
            {{ item.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useGalleryStore } from '@/stores/galleryStore.js';
import imageUrl from '@/utils/mixins/image-url.js';
export default {
  data() {
    return {
      loading: true,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useGalleryStore, ['getGallery']),
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchGallery();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
