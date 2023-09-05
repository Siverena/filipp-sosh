<template>
  <Head>
    <Title>{{ statusCode }}</Title>
  </Head>
  <section class="ps-404">
    <!-- <GrHeader class="ps-404__header"></GrHeader> -->
    <div class="container">
      <div class="ps-404__content">
        <p class="ps-404__code">{{ pageContent.code }}</p>
        <p class="ps-404__error">{{ pageContent.error }}</p>
        <p class="ps-404__text">
          {{ pageContent.text }}
        </p>
        <NuxtLink to="/" class="ps-404__link gr-btn gr-btn--transparent"
          >Перейти на главную</NuxtLink
        >
      </div>
    </div>
  </section>
  <!-- <GrMobMenu v-if="getIsShowMob" /> -->
</template>
<script>
import { mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  computed: {
    ...mapState(useModalStore, ['getIsShowMob']),
    statusCode() {
      return this.$attrs.error.statusCode;
    },

    pageContent() {
      if (this.statusCode === 404) {
        return {
          code: 404,
          error: 'Страница не найдена',
          text: ' Страница, которую вы ищите, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.',
        };
      }
      if (this.statusCode === 500) {
        return {
          code: 500,
          error: '',
          text: '',
        };
      }
    },
  },

  methods: {
    getBodyClass() {
      if (this.$attrs.error.statusCode) {
        document.querySelector('html').classList.add('ps-404__html');
      } else {
        document.querySelector('html').classList.remove('ps-404__html');
      }
    },
  },
  beforeCreate() {},
  mounted() {
    console.log(this.$attrs.error.statusCode);
    this.getBodyClass();
  },
  beforeRouteUpdate() {},
};
</script>
