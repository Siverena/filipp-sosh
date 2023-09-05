import { defineStore } from 'pinia';
export const useModalStore = defineStore('modalStore', {
  state: () => {
    return {
      isShowMob: false,
      isShowOrder: false,
      isSubscription: false,
    };
  },
  getters: {
    getIsShowMob(state) {
      return state.isShowMob;
    },
    getIsShowOrder(state) {
      return state.isShowOrder;
    },
    getIsSubscription(state) {
      return state.isSubscription;
    },
  },
  actions: {
    //mutations
    SET_IS_SHOW_MOB_MENU(data) {
      this.isShowMob = data;
      this.isShowOrder = false;
      this.isShowPhoto = false;
    },
    SET_IS_SHOW_ORDER(data) {
      this.isShowMob = false;
      this.isShowOrder = data;
      this.isShowPhoto = false;
    },
    SET_IS_SUBSCRIPTION(data) {
      this.isSubscription = data;
    },
    //actions
    openOrder(isSubscription = false) {
      this.SET_IS_SUBSCRIPTION(isSubscription);
      this.SET_IS_SHOW_ORDER(true);
      this.deleteScroll();
      this.addInert();
    },
    closeOrder() {
      this.SET_IS_SHOW_ORDER(false);
      this.addScroll();
      this.deleteInert();
    },
    openMobMenu() {
      this.SET_IS_SHOW_MOB_MENU(true);
      this.deleteScroll();
      this.addInert();
    },
    closeMobMenu() {
      this.SET_IS_SHOW_MOB_MENU(false);
      this.addScroll();
      this.deleteInert();
    },

    addScroll() {
      document.querySelector('html').style.overflowY = 'scroll';
    },
    deleteScroll() {
      document.querySelector('html').style.overflowY = 'hidden';
    },
    addInert() {
      document.querySelectorAll('.no-tab').forEach((element) => {
        element.setAttribute('inert', 'inert');
      });
    },
    deleteInert() {
      document.querySelectorAll('.no-tab').forEach((element) => {
        element.removeAttribute('inert');
      });
    },
  },
});
