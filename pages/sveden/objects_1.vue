<template>
  <section class="fs-objects">
    <div class="container">
      <div class="fs-objects__content">
        <article v-for="(cabinet, key) in getObjects" :key="key">
          <div class="fs-objects__item" :class="{ 'fs-objects__item--bg': key % 2 }">
            <div class="fs-objects__item-row" :class="{ 'fs-objects__item-row--revers': key % 2 }">
              <div class="fs-objects__info">
                <p class="fs-h2 fs-objects__info-title" :class="{ 'fs-objects__item-row--revers': key % 2 }">
                  {{ cabinet.title }}
                </p>
                <p class="fs-objects__info-text">{{ cabinet.text }}</p>
                <p></p>
              </div>
              <div class="fs-objects__images">
                <div v-for="(image, index) in cabinet.images" :key="index">
                  <div class="fs-objects__images-item" v-if="index === current">
                    <!-- <div class="fs-objects__item-content" v-html="element"></div> -->
                    <div class="fs-objects__item-content">
                      <img :src="getStaticImageUrl(image)" alt="{{image}}" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fs-objects__item-row" :class="{ 'fs-objects__item-row--revers': key % 2 }">
              <FsObjectsSlider :arrCabinet="cabinet" :inCabinet="key"/>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useObjectsStore } from "@/stores/objectsStore.js";
import imageUrl from "@/utils/mixins/image-url.js";

export default {
  data() {
    return {
      loading: true,
      currentActive: false,
      current: 0,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useObjectsStore, ["getObjects"]),
  },
  methods: {
    ...mapActions(useObjectsStore, ["fetchObjects"]),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchObjects();
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
