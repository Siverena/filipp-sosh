import { defineStore } from 'pinia';
export const useNavLinksStore = defineStore('NavLinksStore', {
  state: () => {
    return {
      navLinks: [
        {
          name: 'О нас ',
          link: '/',
          visibleInMenu: true,
          child: [
            {
              name: 'Сведения об образовательной организации',
              link: '/sveden',
              visibleInMenu: true,
            },
          ],
        },
        {
          name: 'Новости',
          link: '/news',
          visibleInMenu: true,
        },
        {
          name: 'Галерея',
          link: '/gallery',
          visibleInMenu: true,
        },
        {
          name: 'Расписание',
          link: '/schedule',
          visibleInMenu: true,
        },
        {
          name: 'Контакты',
          link: '/contacts',
          visibleInMenu: true,
        },
        {
          name: 'Согласие',
          link: '/agree',
          visibleInMenu: false,
        },
        {
          name: 'Авторизация',
          link: '/login',
          visibleInMenu: false,
        },
        {
          name: 'Регистрация',
          link: '/registration',
          visibleInMenu: false,
        },
        {
          name: 'Условия использования файлов cookie ',
          link: '/cookie',
          visibleInMenu: false,
        },
      ],
    };
  },
  getters: {
    getNavLinks(state) {
      return state.navLinks;
    },
    getMenuNavLinks(state) {
      return state.navLinks.filter((link) => link.visibleInMenu);
    },
  },
  actions: {
    //mutations
    //actions
  },
});
