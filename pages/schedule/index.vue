<template>
  <section class="fs-schedule no-tab" v-if="!loading">
    <Head>
      <Title>Расписание | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:h1> Расписание </template>
      </FsSectionTitles>
      <FsCallSchedule />
      <p class="fs-h2">Расписание уроков</p>

      <FsAccordeon>
        <FsAccordeonTab
          v-for="(item, key) in getSchedule"
          :key="key"
          :index="key"
          :currentActive="currentActive"
        >
          <template v-slot:title> {{ item.className }} класс </template>
          <template v-slot:content>
            <div class="fs-schedule__items">
              <div
                class="fs-schedule-day"
                v-for="(day, index) in item.days"
                :key="index"
              >
                <div class="fs-schedule-day__title">{{ day.dayName }}</div>
                <ol class="fs-schedule-day__list" v-if="day.lessons[0]">
                  <template v-for="(lesson, i) in day.lessons" :key="i">
                    <li class="fs-schedule-day__name">
                      {{ lesson }}
                    </li>
                  </template>
                </ol>
                <div v-else>Выходной</div>
              </div>
            </div>
          </template>
        </FsAccordeonTab>
      </FsAccordeon>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useScheduleStore } from '@/stores/scheduleStore.js';
export default {
  data() {
    return {
      loading: true,
      currentActive: false,
    };
  },
  computed: {
    ...mapState(useScheduleStore, ['getSchedule']),
  },
  methods: {
    ...mapActions(useScheduleStore, ['fetchSchedule']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchSchedule();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    toggleActiveAccordeonBlock(e) {
      e.target.classList.toggle('fs-accordeon__item-title--active');
      e.target.nextElementSibling.classList.toggle(
        'fs-accordeon__item-hidden--active'
      );
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
