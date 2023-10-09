<template>
  <div class="fs-answer">
    <div class="fs-answer__row fs-answer__row--pos">
      <button type="button" class="fs-btn2 fs-btn2-big fs-btn2--dark" @click="openAnswer" v-if="!show">Ответить</button>
    </div>
    <template v-if="show">
      <form class="fs-answer__form" @submit.prevent="submitForm">
        <label :for="id"><span>{{ field.label }}</span></label>
        <textarea 
          class="fs-answer__textarea" 
          :class="{ 'fs-answer__textarea--error': field.error }" 
          :placeholder="field.placeholder" 
          v-model.trim="field.value" 
          :name="field.name" 
          :id="id">
        </textarea>
        <span class="fs-answer__error" v-if="field.error">{{ field.error }}</span>
        <div class="fs-answer__checkbox">
          <input type="checkbox" v-model.trim="field.sendEmail" :name="'checkbox-' + id" :id="'checkbox-' + id" />
          <label :for="'checkbox-' + id">Отправить ответ по почте</label>
        </div>
        <div class="fs-answer__row">
          <p class="fs-answer__notice">Обязательное поле</p>
          <div class="fs-answer__btn">
            <button type="button" class="fs-btn2 fs-btn2-big fs-btn2--white" @click="closeAnswer">Отменить</button>
            <button type="submit" class="fs-btn2 fs-btn2-big fs-btn2--dark">Отправить</button>
          </div>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useModalStore } from "@/stores/modalStore.js";
import { useQuestionsStore } from "@/stores/questionsStore.js";

export default {
  props: ["id"],
  data() {
    return {
      show: false,
      sending: false,
      validationSuccess: true,
      field: {
        name: "text",
        label: "Введите ответ:",
        value: "",
        required: true,
        type: "textarea",
        mask: "",
        placeholder: "Введите ответ",
        error: "",
      },
      formData: {},
    };
  },
  computed: {
    ...mapState(useQuestionsStore, ["path"]),
  },
  methods: {
    ...mapActions(useModalStore, ["closeOrder", "openNotification"]),
    ...mapActions(useQuestionsStore, ["sendAnswer", "fetchQuestions"]),

    validateField(field) {
      field.error = "";
      if (field.required && field.value.length == 0) {
        field.error = `Заполните поле ${field.label}`;
        console.log(field.error);
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
      console.log(this.field.value);
      this.sendingError = false;
      this.checkForm();
      if (this.validationSuccess) {
        this.formData[this.field.name] = this.field.value;
        this.formData["id"] = this.id;
        this.sending = true;
        this.sendAnswer(this.formData)
          .then((response) => {
            console.log(response);
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
</script>
