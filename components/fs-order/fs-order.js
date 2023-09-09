import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  data() {
    return {
      agreementError: false,
      validationSuccess: true,
      // question: '',
      // questionError: '',
      fields: [
        {
          name: 'name',
          label: 'Имя',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Имя',
          error: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          value: '',
          required: true,
          type: 'email',
          mask: '',
          placeholder: 'example@mail.ru',
          error: '',
        },
        {
          name: 'question',
          label: 'Вопрос',
          value: '',
          required: true,
          type: 'textarea',
          mask: '',
          placeholder: 'Введите вопрос',
          error: '',
        },
      ],
      formData: {},
    };
  },

  computed: {
    ...mapState(useModalStore, ['getIsShowOrder']),
    fieldsVisibility() {
      return {
        name: true,
        email: true,
        question: true,
      };
    },
  },
  methods: {
    ...mapActions(useModalStore, ['closeOrder']),
    validateName() {
      if (this.name.length < 0) {
        this.errors.name = 'Поле ';
      }
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateTel(tel) {
      return tel.length === 10;
    },
    validateField(field) {
      field.error = '';
      if (
        this.fieldsVisibility[field.name] &&
        field.required &&
        field.value.length == 0
      ) {
        field.error = `Заполните поле ${field.label}`;
        return false;
      }
      if (
        field.type === 'email' &&
        field.value.length > 0 &&
        !this.validateEmail(field.value)
      ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
      }
      if (
        field.type === 'tel' &&
        field.value.length > 0 &&
        !this.validateTel(field.value)
      ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
      }

      return true;
    },
    checkForm() {
      this.validationSuccess = true;
      this.agreementError = false;
      this.fields.forEach((field) => {
        if (!this.validateField(field)) {
          this.validationSuccess = false;
        }
      });
    },
    submitForm() {
      this.checkForm();
      if (this.validationSuccess) {
        this.fields.forEach((field) => {
          if (this.fieldsVisibility[field.name]) {
            this.formData[field.name] = field.value;
          }
        });
        console.log(this.formData);
        this.closeOrder();
      }
    },
  },
};
