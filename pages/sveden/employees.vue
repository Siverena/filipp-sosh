<template>
  <section class="fs-employees">
    <Head>
      <Title>Руководство. Педагогический состав | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main> Руководство. Педагогический состав </template>
      </FsSectionTitles>
      <div class="fs-employees__loader" v-if="loading">
        <FsTeachersLoaderTwo v-for="n in 2" :key="n" />
      </div>
      <div class="fs-employees__content" v-if="!loading">
        <FsAccordeon>
          <FsAccordeonTab :currentActive="currentActive" :index="false">
            <template v-slot:title>Администрация МКОУ Филипповской СОШ</template>
            <template v-slot:content>
              <section class="fs-employees__block">
                <template v-for="(data, key) in getTeachersAdmin" :key="key">
                  <FsTeachersCard :teacher="data" status="teacher" />
                </template>
              </section>
            </template>
          </FsAccordeonTab>
        </FsAccordeon>
        <FsAccordeon>
          <FsAccordeonTab :currentActive="currentActive" :index="false">
            <template v-slot:title>Педагогический состав МКОУ Филипповской СОШ</template>
            <template v-slot:content>
              <section class="fs-employees__block fs-employees__block--thr">
                <template v-for="(data, key) in getTeachers" :key="key">
                  <FsTeachersCard :teacher="data" status="teacher" />
                </template>
              </section>
            </template>
          </FsAccordeonTab>
        </FsAccordeon>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTeachersStore } from "@/stores/teachersStore.js";
import imageUrl from "@/utils/mixins/image-url.js";

export default {
  data() {
    return {
      loading: true,
      currentActive: true,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useTeachersStore, ["getTeachers", "getTeachersAdmin"]),
  },
  methods: {
    ...mapActions(useTeachersStore, ["fetchTeachers"]),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchTeachers();
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
