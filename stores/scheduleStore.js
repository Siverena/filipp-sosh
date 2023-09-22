import { defineStore } from 'pinia';

export const useScheduleStore = defineStore('ScheduleStore', {
  state: () => {
    return {
      schedule: [],
      callShedule: [],
      isLoading: true,
    };
  },
  getters: {
    getSchedule(state) {
      return state.schedule;
    },
    getCallSchedule(state) {
      return state.callShedule;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  actions: {
    //mutations
    SET_SCHEDULE(data) {
      this.schedule = data.data;
    },
    SET_CALL_SCHEDULE(data) {
      this.callShedule = data.callSchedules;
    },
    //actions
    async fetchSchedule(classId = '') {
      const api = useNuxtApp().$api;
      if (this.schedule.length) {
        return Promise.resolve();
      }
      return api
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
      if (this.callShedule.length) {
        return Promise.resolve();
      }
      return api
        .get(`/call-schedules/`)
        .then((response) => {
          this.SET_CALL_SCHEDULE(response.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    async fetchAll() {
      return Promise.all([this.fetchCallSchedule, this.fetchSchedule]);
    },
  },
});
