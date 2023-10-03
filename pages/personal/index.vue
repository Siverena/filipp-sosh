<template>
  <section class="fs-personal">
    <Head>
      <Title>Личный кабинет | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main>Личный кабинет</template>
      </FsSectionTitles>

      <div class="fs-personal__info">
        <div class="fs-personal__col-left">
          <div class="fs-personal__photo">
            <img src="@/assets/img/fs-person/person.png" alt="" />
          </div>
        </div>
        <div class="fs-personal__col-right">
          <div class="fs-personal__name">Иванов Иван</div>
          <div class="fs-personal__info-block">
            <div class="fs-personal__field">
              <div class="fs-personal__field-name">Классный руководитель</div>
              <div class="fs-personal__field-value">Агеева Ольга Ивановна</div>
            </div>
            <div class="fs-personal__field">
              <div class="fs-personal__field-name">Классный руководитель</div>
              <div class="fs-personal__field-value">Агеева Ольга Ивановна</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fs-personal__shedule">
        <p class="fs-h2 fs-schedule__title">Расписание уроков</p>
        <div class="fs-schedule__loader" v-if="loading">
          <div class="fs-schedule__loader-wrapper">
            <div class="fs-schedule__loader-line"></div>
            <div class="fs-schedule__loader-line"></div>
            <div class="fs-schedule__loader-line"></div>
          </div>
        </div>
        <div v-else class="fs-schedule__items">
          <div
            class="fs-schedule-day"
            v-for="(day, index) in getSchedule.days"
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
      </div>

      <Accordion>
        <AccordionTab>
          <template v-slot:title> 1Б класс (213каб) </template>
          <template v-slot:content>
            <div class="fs-students-list">
              <ul class="fs-students-list__list">
                <li class="fs-students-list__item">
                  <p class="fs-students-list__name">Иванов Иван Иванович</p>
                </li>
              </ul>
            </div>
          </template>
        </AccordionTab>
      </Accordion>
    </div>
    <FsNews />
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
        await this.fetchSchedule('1');

        this.loading = false;
        console.log(this.getSchedule);
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
