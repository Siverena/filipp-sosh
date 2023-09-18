<template>
  <section class="fs-sveden">
    <Head>
      <Title>Сведения | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <div class="fs-sveden__content">
        <FsSectionTitles>
          <template v-slot:h1> Сведения об образовательной организации </template>
        </FsSectionTitles>
        <ul class="fs-sveden__list">
          <li class="fs-sveden__item" v-for="(item, key) in getMenuSvedenLinks" :key="key">
            <NuxtLink class="fs-link fs-link--green fs-sveden__link" :to="item.link">
              <i class="pi pi-link pi--style"></i>
              <span>{{ item.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "pinia";
import { useNavLinksStore } from "@/stores/navLinksStore.js";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useNavLinksStore, ["getMenuSvedenLinks"]),
  },
};
</script>
