import schedule from '@/stores/data/d-schedule.js';
import { defineStore } from 'pinia';
async function API(classId = null) {
  if (classId) {
    return schedule.find((el) => el.classId === classId);
  } else {
    return schedule;
  }
}
export const useScheduleStore = defineStore('ScheduleStore', {
  state: () => {
    return {
      schedule: [],
    };
  },
  getters: {
    getSchedule(state) {
      return state.schedule;
    },
    isLoading() {
      return Promise.resolve(this.fetchSchedule);
    },
  },
  actions: {
    //mutations
    SET_SCHEDULE(data) {
      this.schedule = data.data;
    },
    //actions
    async fetchSchedule(classId = null) {
      API(classId)
        .then((data) => {
          this.SET_SCHEDULE(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
