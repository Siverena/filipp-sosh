<template>
  <div class="fs-call-schedule">
    <div class="fs-h2 fs-call-schedule__title">Расписание звонков</div>
    <div class="fs-call-schedule__list" v-if="!loading">
      <div
        class="fs-call-schedule__item"
        v-for="item in getCallSchedule"
        :key="item.number"
      >
        <div class="fs-call-schedule__item-number">{{ item.number }}</div>
        <div class="fs-call-schedule__item-col">
          <p class="fs-call-schedule__item-text">урок</p>
          <div class="fs-call-schedule__item-period">
            {{ item.start }} - {{ item.end }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./fs-call-schedule.js"></script>
