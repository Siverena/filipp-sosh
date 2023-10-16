import { defineStore } from 'pinia';
export const useModalStore = defineStore('modalStore', {
    state: () => {
        return {
            isShowMob: false,
            isShowOrder: false,
            isShowSlider: false,
            isShowCookies: false,
            isShowNotification: false,
            notificationText: '',
        };
    },
    getters: {
        getIsShowMob(state) {
            return state.isShowMob;
        },
        getIsShowOrder(state) {
            return state.isShowOrder;
        },
        getIsShowSlider(state) {
            return state.isShowSlider;
        },
        getisShowCookies(state) {
            return state.isShowCookies;
        },
        getIsShowNotification(state) {
            return state.isShowNotification;
        },
        getNotificationText(state) {
            return state.notificationText;
        },
    },
    actions: {
        //mutations
        SET_IS_SHOW_MOB_MENU(data) {
            this.isShowMob = data;
            this.isShowOrder = false;
            this.isShowSlider = false;
        },
        SET_IS_SHOW_ORDER(data) {
            this.isShowMob = false;
            this.isShowOrder = data;
            this.isShowSlider = false;
        },
        SET_IS_SHOW_SLIDER(data) {
            this.isShowMob = false;
            this.isShowOrder = false;
            this.isShowSlider = data;
        },
        SET_IS_SHOWCOOKIES(data) {
            this.isShowCookies = data;
        },
        SET_IS_SHOW_NOTIFICATION(data, text) {
            this.isShowNotification = data;
            this.notificationText = text;
        },
        //actions
        openOrder() {
            this.SET_IS_SHOW_ORDER(true);
            this.deleteScroll();
            this.addInert();
            this.addListenerEscKey();
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
            this.addListenerEscKey();
        },
        closeMobMenu() {
            this.SET_IS_SHOW_MOB_MENU(false);
            this.addScroll();
            this.deleteInert();
        },
        openSlider() {
            this.SET_IS_SHOW_SLIDER(true);
            this.deleteScroll();
            this.addInert();
            this.addListenerEscKey();
        },
        closeSlider() {
            this.SET_IS_SHOW_SLIDER(false);
            this.addScroll();
            this.deleteInert();
        },
        closeModal() {
            this.closeMobMenu();
            this.closeOrder();
            this.closeSlider();
            document.removeEventListener('keydown', this.escHandler);
        },
        openNotification(text = '') {
            this.SET_IS_SHOW_NOTIFICATION(true, text);
        },
        closeNotification() {
            this.SET_IS_SHOW_NOTIFICATION(false);
        },

        acceptCookies() {
            this.SET_IS_SHOWCOOKIES(false);
            this.addSession();
        },
        showCookies() {
            this.SET_IS_SHOWCOOKIES(true);
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

        addListenerEscKey() {
            document.addEventListener('keydown', this.escHandler);
        },
        escHandler(e) {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        },
        addSession() {
            sessionStorage.setItem('test', 'Test value');
        },
    },
});
