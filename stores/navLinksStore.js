import { defineStore } from 'pinia';
export const useNavLinksStore = defineStore('NavLinksStore', {
  state: () => {
    return {
      navLinks: [
        {
          name: 'О нас ',
          link: '/',
          visibleInMenu: true, 
          visibleInSvedenMenu: false,
          child: [
            {
              name: 'Сведения об образовательной организации',
              link: '/sveden',
              visibleInMenu: true,
              visibleInSvedenMenu: false,
            },
          ],
        },
        {
          name: 'Новости',
          link: '/news',
          visibleInMenu: true,
          visibleInSvedenMenu: false,
        },
        {
          name: 'Галерея',
          link: '/gallery',
          visibleInMenu: true,
          visibleInSvedenMenu: false,
        },
        {
          name: 'Расписание',
          link: '/schedule',
          visibleInMenu: true,
          visibleInSvedenMenu: false,
        },
        {
          name: 'Контакты',
          link: '/contacts',
          visibleInMenu: true,
          visibleInSvedenMenu: false,
        },
        {
          name: 'Согласие',
          link: '/agree',
          visibleInMenu: false,
          visibleInSvedenMenu: false,
        },
        {
          name: 'Авторизация',
          link: '/login',
          visibleInMenu: false,
          visibleInSvedenMenu: false,
        },
        {
          name: 'Условия использования файлов cookie ',
          link: '/cookie',
          visibleInMenu: false,
          visibleInSvedenMenu: false,
        },
        // Добавление
        {
          name: 'Основные сведения ',
          link: '/sveden/common',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Структура и органы управления ',
          link: '/sveden/struct',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Документы ',
          link: '/sveden/document',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Образование ',
          link: '/sveden/education',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Образовательные стандарты ',
          link: '/sveden/eduStandarts/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Руководство. Педагогический состав ',
          link: '/sveden/employees/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Материально-техническое обеспечение и оснащенность образовательного процесса ',
          link: '/sveden/objects/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Стипендии и меры поддержки обучающихся ',
          link: '/sveden/grants/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Платные образовательные услуги ',
          link: '/sveden/paid_edu/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Финансово-хозяйственная деятельность ',
          link: '/sveden/budget/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        { 
          name: 'Вакантные места для приема (перевода) ',
          link: '/sveden/vacant/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Международное сотрудничество ',
          link: '/sveden/cooperation/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
        },
        {
          name: 'Доступная среда ',
          link: '/sveden/dsreda/',
          visibleInMenu: false,
          visibleInSvedenMenu: true,
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
