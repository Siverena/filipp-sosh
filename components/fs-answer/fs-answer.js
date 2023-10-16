import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import { useQuestionsStore } from '@/stores/questionsStore.js';

export default {
    props: ['id'],
    data() {
        return {
            show: false,
            sending: false,
            validationSuccess: true,
            field: {
                name: 'text',
                label: 'Введите ответ:',
                value: '',
                required: true,
                type: 'textarea',
                mask: '',
                placeholder: 'Введите ответ',
                error: '',
            },
            formData: {},
        };
    },
    computed: {
        ...mapState(useQuestionsStore, ['path']),
    },
    methods: {
        ...mapActions(useModalStore, ['closeOrder', 'openNotification']),
        ...mapActions(useQuestionsStore, ['sendAnswer', 'fetchQuestions']),

        validateField(field) {
            field.error = '';
            if (field.required && field.value.length == 0) {
                field.error = `Заполните поле ${field.label}`;
                return false;
            }
            return true;
        },
        checkForm() {
            this.validationSuccess = true;
            if (!this.validateField(this.field)) {
                this.validationSuccess = false;
            }
        },
        async submitForm() {
            this.sendingError = false;
            this.checkForm();
            if (this.validationSuccess) {
                this.formData[this.field.name] = this.field.value;
                this.formData['id'] = this.id;
                this.sending = true;
                this.sendAnswer(this.formData)
                    .then((response) => {
                        // console.log(response);
                        this.openNotification(response.data.message);
                        this.fetchQuestions(this.path);
                        this.sending = false;
                    })
                    .catch((e) => {
                        this.sending = false;
                        console.log(e);
                    });
            }
        },
        openAnswer() {
            this.show = true;
        },
        closeAnswer() {
            this.show = false;
        },
    },
};
