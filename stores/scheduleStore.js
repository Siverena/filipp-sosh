import { defineStore } from 'pinia';

export const useScheduleStore = defineStore('ScheduleStore', {
  state: () => {
    return {
      schedule: [],
      callShedule: [],
    };
  },
  getters: {
    getSchedule(state) {
      return state.schedule;
    },
    getCallSchedule(state) {
      return state.callShedule;
    },
    isLoading() {
      return Promise.resolve(this.fetchSchedule);
    },
  },
  actions: {
    //mutations
    SET_SCHEDULE(data) {
      this.schedule = data;
    },
    SET_CALL_SCHEDULE(data) {
      this.callShedule = data.callSchedules;
    },
    //actions
    async fetchSchedule(classId = '') {
      const api = useNuxtApp().$api;
      api
        .get(`/class-schedules/${classId}`)
        .then((response) => {
          this.SET_SCHEDULE(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    async fetchCallSchedule() {
      const api = useNuxtApp().$api;
      api
        .get(`/call-schedules/`)
        .then((response) => {
          this.SET_CALL_SCHEDULE(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
  },
});
