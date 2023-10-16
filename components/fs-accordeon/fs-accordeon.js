export default {
    props: ['currentActive', 'index'],
    methods: {
        toggleActiveAccordeonBlock(e) {
            e.target.classList.toggle('fs-accordeon__item-title--active');
            e.target.nextElementSibling.classList.toggle(
                'fs-accordeon__item-hidden--active'
            );
        },
    },
};
