<template>
  <section class="fs-schedule no-tab" v-if="!loading">
    <Head>
      <Title>Расписание | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:h1> Расписание </template>
      </FsSectionTitles>
      <!-- <Accordion
        :multiple="true"
        :activeIndex="[0]"
        class="fs-accordion fs-schedule__accordeon"
      >
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
      </Accordion> -->
      <FsCallSchedule />
      <p class="fs-h2">Расписание уроков</p>

      <ul class="fs-accordeon">
        <li
          class="fs-accordeon__item"
          v-for="(item, key) in getSchedule"
          :key="key"
        >
          <p
            class="fs-accordeon__item-title"
            :class="{
              'fs-accordeon__item-title--active': curretActive === key,
            }"
            @click.self="toggleActiveAccordeonBlock"
          >
            {{ `${item.className} класс` }}
            <FsArrowDown />
          </p>
          <div
            class="fs-accordeon__item-hidden"
            :class="{
              'fs-accordeon__item-hidden--active': curretActive === key,
            }"
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
          </div>
        </li>
      </ul>
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
      curretActive: false,
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
