<template>
  <Head>
    <Title>Расписание | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
  </Head>
  <section class="fs-schedule no-tab" v-if="!loading">
    <div class="container">
      <FsSectionTitles>
        <template v-slot:h1> Расписание </template>
      </FsSectionTitles>
      <Accordion :multiple="true" :activeIndex="[0]" :class="'fs-accordion'">
        <AccordionTab
          v-for="(item, classId) in getSchedule"
          :key="classId"
          :header="`${item.className} класс`"
        >
          <div class="fs-schedule__items">
            <div
              class="fs-schedule-day"
              v-for="(day, index) in item.days"
              :key="index"
            >
              <div class="fs-schedule-day__title">{{ day.dayName }}</div>
              <ol class="fs-schedule-day__list">
                <li
                  class="fs-schedule-day__name"
                  v-for="(lesson, i) in day.lessons"
                  :key="i"
                >
                  {{ lesson }}
                </li>
              </ol>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
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
  },
  async created() {
    this.loadData();
  },
};
</script>
