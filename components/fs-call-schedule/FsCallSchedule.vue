<template>
  <div class="fs-call-schedule">
    <div class="fs-h2 fs-call-schedule__title">Расписание звонков</div>
    <div class="fs-call-schedule__loader" v-if="loading">
      <div class="fs-call-schedule__loader-wrapper">
        <div class="fs-call-schedule__loader-line"></div>
        <div class="fs-call-schedule__loader-line"></div>
      </div>
    </div>
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
<style scoped>
.loader {
  position: relative;
  width: 240px;
  height: 130px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
  padding: 15px;
  background-color: #e3e3e3;
  overflow: hidden;
}

.loader:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    110deg,
    rgba(227, 227, 227, 0) 0%,
    rgba(227, 227, 227, 0) 40%,
    rgba(227, 227, 227, 0.5) 50%,
    rgba(227, 227, 227, 0) 60%,
    rgba(227, 227, 227, 0) 100%
  );
  animation: gradient-animation_2 1.2s linear infinite;
}

.loader .wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.loader .wrapper > div {
  background-color: #cacaca;
}

.loader .button {
  display: inline-block;
  height: 32px;
  width: 75px;
}

.loader .line-1 {
  position: absolute;
  top: 11px;
  left: 58px;
  height: 10px;
  width: 100px;
}

.loader .line-2 {
  position: absolute;
  top: 34px;
  left: 58px;
  height: 10px;
  width: 150px;
}

.loader .line-3 {
  position: absolute;
  top: 57px;
  left: 0px;
  height: 10px;
  width: 100%;
}

.loader .line-4 {
  position: absolute;
  top: 80px;
  left: 0px;
  height: 10px;
  width: 92%;
}

@keyframes gradient-animation_2 {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
