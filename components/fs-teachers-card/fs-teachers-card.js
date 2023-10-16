export default {
    props: ['teacher', 'status'],
    methods: {
        getName(name) {
            let arrName = [];
            const [lastName, ...firstName] = name.split(' ');
            arrName.push(lastName, firstName.join(' '));
            return arrName;
        },
        getNameThr(name) {
            let arrName = [];
            const [lastName, ...firstName] = name.split(' ');
            arrName.push(lastName, firstName.join(' '));
            return arrName;
        },
        errorImg(el) {
            if (this.status === 'teacher') {
                el.target.style.display = 'none';
            }
        },
    },
};
