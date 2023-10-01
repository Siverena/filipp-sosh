<template>
  <div class="fs-order__layout">
    <div class="fs-order">
      <div class="fs-order__header">
        <div class="fs-order__title">Вопрос руководителю</div>
        <div
          class="fs-order__close"
          @click="closeOrder"
          @keydown.enter="closeOrder"
          tabindex="0"
        >
          <FsCross />
        </div>
      </div>
      <form
        class="fs-order__content"
        @submit.prevent="submitForm"
        novalidate="true"
      >
        <template v-for="(field, i) in fields" :key="i">
          <div class="fs-order__field" v-if="fieldsVisibility[field.name]">
            <label class="fs-order__label" :for="field.name"
              >{{ field.label
              }}<span class="fs-order__star" v-if="field.required"
                >*</span
              ></label
            >
            <input
              v-if="!field.mask && field.type !== 'textarea'"
              class="fs-order__input"
              :class="{
                'fs-order__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <textarea
              v-if="field.type === 'textarea'"
              class="fs-order__textarea"
              :class="{
                'fs-order__textarea--error': field.error,
              }"
              :name="field.name"
              :id="field.name"
              cols="30"
              rows="5"
              :placeholder="field.placeholder"
              v-model.trim="field.value"
              @focusout="validateField(field)"
            ></textarea>

            <span class="fs-order__error" v-if="field.error"
              >{{ field.error }}
            </span>
          </div>
        </template>
        <button class="fs-btn fs-btn--dark fs-order__btn">Отправить</button>
        <p class="fs-order__info">
          Нажимая на кнопку, Вы принимаете
          <nuxt-link
            to="/agree"
            target="_blank"
            class="fs-link fs-link--base fs-order__link"
            >cогласие на обработку персональных данных</nuxt-link
          >
          .
        </p>

        <div class="fs-order__attention">
          <span class="fs-order__star">*</span>Обязательное поле
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./fs-order.js"></script>
