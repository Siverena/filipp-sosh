import { defineStore } from 'pinia';
export const useNavLinksStore = defineStore('NavLinksStore', {
    state: () => {
        return {
            currentFirstElem: '',
            currentSecondElem: '',
            navLinks: [
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
                    name: 'Сведения об образовательной организации',
                    link: '/sveden',
                    visibleInMenu: true,
                    visibleInSvedenMenu: false,
                    child: [
                        // Добавление
                        {
                            name: 'Основные сведения',
                            link: '/sveden/common',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Структура и органы управления образовательной организации',
                            link: '/sveden/struct',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Документы',
                            link: '/sveden/document',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Образование',
                            link: '/sveden/education',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Образовательные стандарты',
                            link: '/sveden/eduStandarts',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Руководство. Педагогический состав',
                            link: '/sveden/employees',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
                            link: '/sveden/objects',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Стипендии и меры поддержки обучающихся',
                            link: '/sveden/grants',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Платные образовательные услуги',
                            link: '/sveden/paid_edu',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Финансово-хозяйственная деятельность',
                            link: '/sveden/budget',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Вакантные места для приема (перевода)',
                            link: '/sveden/vacant',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Международное сотрудничество',
                            link: '/sveden/cooperation',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                        {
                            name: 'Доступная среда',
                            link: '/sveden/dsreda',
                            visibleInMenu: false,
                            visibleInSvedenMenu: false,
                        },

                        {
                            name: 'Организация питания в образовательной организации',
                            link: '/ezhednevnoe-menyu',
                            visibleInMenu: false,
                            visibleInSvedenMenu: true,
                        },
                    ],
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
                    name: 'Личный кабинет',
                    link: '/personal',
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
                    name: 'Регистрация',
                    link: '/registration',
                    visibleInMenu: false,
                },
                {
                    name: 'Условия использования файлов cookie',
                    link: '/cookie',
                    visibleInMenu: false,
                    visibleInSvedenMenu: false,
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
        getMenuSvedenLinks(state) {
            const links = state.navLinks.find((el) => el.link === '/sveden');
            return links.child.filter((link) => link.visibleInSvedenMenu);
        },
        getSvedenLink(state) {
            const links = state.navLinks.find((el) => el.link === '/sveden');
            return links.child.find(
                (el) => el.link === `/sveden/${state.currentSecondElem}`
            );
        },
        getLink(state) {
            return state.navLinks.find(
                (el) => el.link === `/${state.currentFirstElem}`
            );
        },
    },
    actions: {
        //mutations
        SET_CURRENT_FIRST_ELEM(slug) {
            this.currentFirstElem = slug;
        },
        SET_CURRENT_SECOND_ELEM(slug) {
            this.currentSecondElem = slug;
        },
        //actions
        setCurrentFirstElem(slug) {
            this.SET_CURRENT_FIRST_ELEM(slug);
        },
        setCurrentSecondElem(slug) {
            this.SET_CURRENT_SECOND_ELEM(slug);
        },
    },
});
