<template>
  <section class="fs-auth no-tab">
    <div class="container">
      <FsSectionTitles class="fs-auth__title">
        <template v-slot:main>Вход в личный кабинет</template>
      </FsSectionTitles>

      <form
        class="fs-auth__content"
        @submit.prevent="submitForm"
        novalidate="true"
      >
        <template v-for="(field, key) in fields" :key="key">
          <div class="fs-auth__field" v-if="fieldsVisibility[field.name]">
            <label class="fs-auth__label" :for="field.name"
              >{{ field.label
              }}<span class="fs-auth__star" v-if="field.required"
                >*</span
              ></label
            >
            <InputMask
              v-if="field.mask"
              class="fs-auth__input"
              :class="{
                'fs-auth__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              :mask="field.mask"
              :unmask="true"
              :autoClear="false"
              :unstyled="true"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <input
              v-else
              class="fs-auth__input"
              :class="{
                'fs-auth__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <span class="fs-auth__error" v-if="field.error">{{
              field.error
            }}</span>
          </div>
        </template>

        <button class="fs-btn fs-btn--dark fs-auth__btn">Отправить</button>

        <div class="fs-auth__attention">
          <span class="fs-auth__star">*</span>Обязательное поле
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import { useUserStore } from '@/stores/userStore.js';
export default {
  data() {
    return {
      agreementError: false,
      validationSuccess: true,
      sending: false,
      sendingError: false,
      fields: [
        {
          name: 'login',
          label: 'Логин',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Логин',
          error: '',
        },
        {
          name: 'password',
          label: 'Пароль',
          value: '',
          required: true,
          type: 'password',
          mask: '',
          placeholder: '****',
          error: '',
        },
      ],
      formData: {},
    };
  },

  computed: {
    fieldsVisibility() {
      return {
        login: true,
        password: true,
      };
    },
  },
  methods: {
    ...mapActions(useModalStore, ['closeOrder', 'openNotification']),
    ...mapActions(useUserStore, ['auth']),
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
      this.sendingError = false;
      this.checkForm();
      if (this.validationSuccess) {
        this.fields.forEach((field) => {
          if (this.fieldsVisibility[field.name]) {
            this.formData[field.name] = field.value;
          }
        });
        this.sending = true;

        this.auth(this.formData)
          .then((response) => {
            this.sending = false;
          })
          .catch((e) => {
            this.openNotification('Неверный пароль');
            this.sending = false;
            console.log(e);
            this.sendingError = true;
          });
      }
    },
  },
};
</script>
