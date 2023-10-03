<template>
  <section class="fs-objects">
    <Head>
      <Title>
        Материально-техническое обеспечение и оснащенность образовательного
        процесса | МКОУ ФИЛИППОВСКАЯ СОШ
      </Title>
    </Head>
    <div class="container">
      <div class="fs-objects__content">
        <FsSectionTitles>
          <template v-slot:main>
            Материально-техническое обеспечение и оснащенность образовательного
            процесса
          </template>
        </FsSectionTitles>
        <div class="fs-objects__loader" v-if="loading">
          <div class="fs-objects__loader-row1"></div>
          <div class="fs-objects__loader-row2">
            <div class="fs-objects__loader-col1">
              <div class="fs-objects__loader-line1"></div>
              <div class="fs-objects__loader-line2"></div>
            </div>
            <div class="fs-objects__loader-col2"></div>
          </div>
        </div>
        <FsAccordeon v-if="!loading">
          <FsAccordeonTab :currentActive="currentActive" :index="false">
            <template v-slot:title>
              Оборудованные учебные кабинеты, объекты для проведения
              практических занятий а так же приспособленных для использования
              инвалидами и лицами с ограниченными возможностями здоровья
            </template>
            <template v-slot:content>
              <div class="fs-objects__content-wrapper">
                <article v-for="(cabinet, key) in getObjects" :key="key">
                  <div
                    class="fs-objects__item"
                    :class="{ 'fs-objects__item--rev': key % 2 }"
                  >
                    <div class="fs-objects__info">
                      <div
                        class="fs-h2 fs-objects__info-title"
                        :class="{ 'fs-objects__info-title--rev': key % 2 }"
                      >
                        {{ cabinet.name }}
                      </div>
                      <p
                        class="fs-objects__info-text"
                        v-html="cabinet.description"
                      ></p>
                    </div>
                    <FsObjectsSlider :arrCabinet="cabinet" :inCabinet="key" />
                  </div>
                </article>
              </div>
            </template>
          </FsAccordeonTab>
        </FsAccordeon>
        <FsSection slug="objects" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useObjectsStore } from '@/stores/objectsStore.js';

export default {
  data() {
    return {
      loading: true,
      currentActive: true,
      current: 0,
    };
  },
  computed: {
    ...mapState(useObjectsStore, ['getObjects']),
  },
  methods: {
    ...mapActions(useObjectsStore, ['fetchObjects']),
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
